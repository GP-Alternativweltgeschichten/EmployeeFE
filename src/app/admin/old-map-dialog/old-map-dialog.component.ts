import {booleanAttribute, Component, EventEmitter, Input, OnChanges, Output, ViewChild} from '@angular/core';
import {OldMap} from '../../services/OldMap';
import {FileUpload, FileUploadHandlerEvent} from 'primeng/fileupload';
import {OldMapService} from '../../services/old-map.service';
import {TranslateService} from '@ngx-translate/core';
import {Observable, Subject} from 'rxjs';
import {Map} from '../../services/Map';
import {MapService} from '../../services/map.service';

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
  @Output() mapsList = new EventEmitter<Map[]>();

  @ViewChild('fileUpload') fileUpload: FileUpload | undefined;

  selectedOldMap = {
    id: null,
    map_id: null,
    dateOfMap: null,
    created_at: null,
    updated_at: null,
  };
  oldMaps: OldMap[] | undefined;

  selectedMap = {
    id: null,
    name: null,
    image: null,
    visible: null,
    created_at: null,
    updated_at: null,
    scenario_id: null,
    oldMap_id: null,
  }
  maps: Map[] | undefined;

  private emptyInput: boolean = false;

  loadingFile = false;

  constructor(public oldMapService: OldMapService, public mapService: MapService ,public translate: TranslateService) {
  }

  ngOnChanges(): void {
    if (this.editOldMap) {
      this.selectedOldMap = {
        ...this.editOldMap,
        created_at: new Date(this.editOldMap.created_at),
        updated_at: new Date(this.editOldMap.updated_at)
      }
      this.mapService.getMap(this.editOldMap.map_id).subscribe({
        next: (data: any) => {
          this.selectedMap = {
            ...data,
            created_at: new Date(data.created_at),
            updated_at: new Date(data.updated_at),
          };
        }
      })
    } else {
      this.selectedOldMap = {
        id: null,
        map_id: null,
        dateOfMap: null,
        created_at: null,
        updated_at: null,
      }
      this.selectedMap = {
        id: null,
        name: null,
        image: null,
        visible: null,
        created_at: null,
        updated_at: null,
        scenario_id: null,
        oldMap_id: null,
      }
    }
  }

  closeDialog() {
    this.selectedOldMap = {
      id: null,
      map_id: null,
      dateOfMap: null,
      created_at: null,
      updated_at: null,
    }
    this.selectedMap = {
      id: null,
      name: null,
      image: null,
      visible: null,
      created_at: null,
      updated_at: null,
      scenario_id: null,
      oldMap_id: null,
    }
    this.displayDialogChange.emit(false);
    this.fileUpload?.clear();
  }

  private trimOldMapAndMapInputs() {
    this.emptyInput = false;
    if (this.selectedOldMap) {
      // @ts-ignore
      this.selectedOldMap.name = this.selectedOldMap.dateOfMap.trim();
      if (this.selectedOldMap.dateOfMap === "") {
        this.emptyInput = true;
      }
    }
    if (this.selectedMap) {
      // @ts-ignore
      this.selectedMap.name = this.selectedMap.name.trim();
      if (this.selectedMap.name === "") {
        this.emptyInput = true;
      }
    }
  }

  saveOldMapAndMap() {
    this.trimOldMapAndMapInputs();
    if (this.emptyInput) {
      return;
    }
    if (this.selectedMap.image === null) {
      this.subscribeToObservable();
    }
    this.fileToByte(this.selectedMap.image).subscribe({
        next: (output) => {
          // @ts-ignore
          this.selectedMap.image = Array.from(new Uint8Array(output));
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
    let responseMap$: Observable<Map>;
    if (this.selectedMap.id) {
      responseMap$ = this.mapService.updateMap(
        this.selectedMap as unknown as Map
      );
    } else {
      responseMap$ = this.mapService.createMap(
        this.selectedMap as unknown as Map
      );
    }
    responseMap$.subscribe({
      complete: () => {
        this.mapService.getMaps().subscribe({
          next:
            (data: Map[]) => {
              this.maps = data;
            },
          complete: () =>
            this.mapsList.emit(this.maps)
        });
        // @ts-ignore
        this.selectedMap = null;
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
    this.selectedMap.image = event.files[0];
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
}
