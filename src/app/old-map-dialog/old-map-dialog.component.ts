import {booleanAttribute, Component, EventEmitter, Input, OnChanges, Output, ViewChild} from '@angular/core';
import {OldMap} from '../services/OldMap';
import {FileUpload, FileUploadHandlerEvent} from 'primeng/fileupload';
import {OldMapService} from '../services/old-map.service';
import {TranslateService} from '@ngx-translate/core';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-old-map-dialog',
  templateUrl: './old-map-dialog.component.html',
  styleUrl: './old-map-dialog.component.css'
})
export class OldMapDialogComponent implements OnChanges{
  @Input({transform: booleanAttribute}) displayDialog: boolean = false;
  @Input() editOldMap: any;
  @Output() displayDialogChange = new EventEmitter<boolean>();
  @Output() oldMapsList = new EventEmitter<OldMap[]>();

  @ViewChild('fileUpload') fileUpload: FileUpload | undefined;

  selectedOldMap = {
    id: null,
    name: null,
    image: null,
    dateOfMap: null,
    editable: null,
    visible: null,
    createdAt: null,
    updatedAt: null,
  };
  oldMaps: OldMap[] | undefined;

  private emptyInput: boolean = false;

  loadingFile = false;

  constructor(public oldMapService: OldMapService ,public translate: TranslateService) {
  }

  ngOnChanges(): void {
    if (this.editOldMap) {
      this.selectedOldMap = {
        ...this.editOldMap,
        created_at: new Date(this.editOldMap.created_at),
        updated_at: new Date(this.editOldMap.updated_at)
      }
    } else {
      this.selectedOldMap = {
        id: null,
        name: null,
        image: null,
        dateOfMap: null,
        editable: null,
        visible: null,
        createdAt: null,
        updatedAt: null,
      }
    }
  }

  closeDialog() {
    this.selectedOldMap = {
      id: null,
      name: null,
      image: null,
      dateOfMap: null,
      editable: null,
      visible: null,
      createdAt: null,
      updatedAt: null,
    }
    this.displayDialogChange.emit(false);
    this.fileUpload?.clear();
  }

  private trimOldMapInputs() {
    this.emptyInput = false;
    if (this.selectedOldMap) {
      // @ts-ignore
      this.selectedOldMap.name = this.selectedOldMap.dateOfMap.trim();
      if (this.selectedOldMap.dateOfMap === "") {
        this.emptyInput = true;
      }
    }
  }

  saveOldMap() {
    this.trimOldMapInputs();
    if (this.emptyInput) {
      return;
    }
    if (this.selectedOldMap.image === null) {
      this.subscribeToObservable();
    }
    if (this.selectedOldMap.id) {
      this.oldMapService.getOldMapMap(this.selectedOldMap.id).subscribe({
        next: (output) => {
          this.blobToByte(output).subscribe({
            next: (output) => {
              // @ts-ignore
              this.selectedOldMap.image = Array.from(new Uint8Array(output));
            },
            complete: () => {
              this.subscribeToObservable();
            }
          })
        }
      })
      return;
    }
    this.fileToByte(this.selectedOldMap.image).subscribe({
        next: (output) => {
          // @ts-ignore
          this.selectedOldMap.image = Array.from(new Uint8Array(output));
        },
        complete: () => {
          this.subscribeToObservable();
        }
      }
    );
  }

  subscribeToObservable() {
    let responseOldMap$: Observable<OldMap>;
    if (this.selectedOldMap.id) {
      responseOldMap$ = this.oldMapService.updateOldMap(
        this.selectedOldMap as unknown as OldMap
      );
    } else {
      responseOldMap$ = this.oldMapService.createOldMap(
        this.selectedOldMap as unknown as OldMap
      );
    }
    responseOldMap$.subscribe({
      complete: () => {
        this.oldMapService.getOldMaps().subscribe({
          next:
            (data: OldMap[]) => {
              this.oldMaps = data;
            },
          complete: () =>
            this.oldMapsList.emit(this.oldMaps)
        });
        // @ts-ignore
        this.selectedOldMap = null;
        this.displayDialog = false;
        this.closeDialog();
      }
    });
  }

  customImageUploader(event: FileUploadHandlerEvent) {
    const maxFileSize = 30000000;
    const maxFileSizeString = "30MB";
    if (event.files[0] == null) {
      return;
    }
    if (event.files[0].size > maxFileSize) {
      const err = this.translate.instant("messages.fileSize") + maxFileSizeString;
      this.fileUpload?.clear();
      return;
    }
    this.loadingFile = !this.loadingFile;
    // @ts-ignore
    this.selectedOldMap.image = event.files[0];
    this.fileUpload?.clear();
  }

  fileToByte(file: any): Observable<ArrayBuffer> {
    const sub = new Subject<ArrayBuffer>();
    const reader = new FileReader();

    reader.onload = () => {
      const content: ArrayBuffer = reader.result as ArrayBuffer;
      sub.next(content);
      sub.complete();
    };

    reader.readAsArrayBuffer(file);
    return sub.asObservable();
  }
  blobToByte(blob: Blob): Observable<ArrayBuffer> {
    const sub = new Subject<ArrayBuffer>();
    const reader = new FileReader()

    reader.onload = () => {
      const content: ArrayBuffer = reader.result as ArrayBuffer;
      sub.next(content);
      sub.complete();
    };

    reader.readAsArrayBuffer(blob)
    return sub.asObservable()
  }


}
