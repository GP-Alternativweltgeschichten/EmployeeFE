import {booleanAttribute, Component, EventEmitter, Input, OnChanges, Output, ViewChild} from '@angular/core';
import {Scenario} from '../../services/Scenario';
import {Map} from '../../services/Map';
import {FileUpload, FileUploadHandlerEvent} from 'primeng/fileupload';
import {ScenarioService} from '../../services/scenario.service';
import {Observable, Subject} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {MapService} from '../../services/map.service';

@Component({
  selector: 'app-scenario-dialog',
  templateUrl: './scenario-dialog.component.html',
  styleUrl: './scenario-dialog.component.css'
})
export class ScenarioDialogComponent implements OnChanges{
  @Input({transform: booleanAttribute}) displayDialog: boolean = false;
  @Input() editScenario: any;
  @Output() displayDialogChange = new EventEmitter<boolean>();
  @Output() scenariosList = new EventEmitter<Scenario[]>();
  @Output() mapsList = new EventEmitter<Map[]>();

  @ViewChild('fileUpload') fileUpload: FileUpload | undefined;

  selectedScenario = {
    id: null,
    name: null,
    map_id: null,
    description: null,
    created_at:  null,
    updated_at: null,
  };
  scenarios: Scenario[] | undefined;

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

  constructor(public scenarioService: ScenarioService, public mapService: MapService, public translate: TranslateService) {
  }

  ngOnChanges(): void {
    if (this.editScenario) {
      this.selectedScenario = {
        ...this.editScenario,
        created_at: new Date(this.editScenario.created_at),
        updated_at: new Date(this.editScenario.updated_at)
      }
      this.mapService.getMap(this.editScenario.map_id).subscribe({
        next: (data: any) => {
          this.selectedMap = {
            ...data,
            created_at: new Date(data.created_at),
            updated_at: new Date(data.updated_at),
          };
        }
      })
    } else {
      this.selectedScenario = {
        id: null,
        name: null,
        map_id: null,
        description: null,
        created_at:  null,
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
    this.selectedScenario = {
      id: null,
      name: null,
      map_id: null,
      description: null,
      created_at:  null,
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

  private trimScenarioAndMapInputs() {
    this.emptyInput = false;
    if (this.selectedScenario === null) {
      return;
    }
    if (this.selectedMap === null) {
      return;
    }
    // @ts-ignore
    this.selectedScenario.name = this.selectedScenario.name.trim();
    if (this.selectedScenario.name === "") {
      this.emptyInput = true;
    }
    // @ts-ignore
    this.selectedScenario.description = this.selectedScenario.description.trim();
    if (this.selectedScenario.description === "") {
      this.emptyInput = true;
    }
    // @ts-ignore
    this.selectedMap.name = this.selectedMap.name.trim();
    if (this.selectedMap.name === "") {
      this.emptyInput = true;
    }
  }

  saveScenarioAndMap() {
    this.trimScenarioAndMapInputs();
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
    let responseScenario$: Observable<Scenario>;
    if (this.selectedScenario.id) {
      responseScenario$ = this.scenarioService.updateScenario(
        this.selectedScenario as unknown as Scenario
      );
    } else {
      responseScenario$ = this.scenarioService.createScenario(
        this.selectedScenario as unknown as Scenario
      );
    }
    responseScenario$.subscribe({
      complete: () => {
        this.scenarioService.getScenarios().subscribe({
          next:
            (data: Scenario[]) => {
              this.scenarios = data;
            },
          complete: () =>
            this.scenariosList.emit(this.scenarios)
        });
        // @ts-ignore
        this.selectedScenario = null;
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
