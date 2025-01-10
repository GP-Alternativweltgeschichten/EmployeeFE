import {Component, OnChanges, OnInit} from '@angular/core';
import {Scenario} from '../services/Scenario';
import {ScenarioService} from '../services/scenario.service';
import {TranslateService} from '@ngx-translate/core';
import {Table} from 'primeng/table';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrl: './scenarios.component.css'
})
export class ScenariosComponent implements OnInit, OnChanges {
  tablePaginationSteps = [5, 10, 15, 20, 25, 30];
  tableRows = 10;

  displayDialog: boolean | undefined;
  editScenario: Scenario | null | undefined;
  loadingScenario = true;

  scenariosList: Scenario[] = [];

  inputName: string = '';
  inputDescription: string = '';
  inputCreatedAt: string = '';

  map: any;
  loadingMap = true;

  constructor(public scenarioService: ScenarioService,
              public translate: TranslateService) {
  }

  ngOnInit() {
    this.scenarioService.getScenarios().subscribe({
      next: (data: Scenario[]) => {
        this.scenariosList = data;
      },
      complete: () => {
        this.loadingScenario = false;
      }
    })
  }

  ngOnChanges() {
    this.editScenario = null;
  }

  updateScenariosList(scenarios: Scenario[]) {
    this.scenariosList = scenarios;
  }

  addScenarioDialog() {
    this.editScenario = null;
    this.displayDialog = true;
  }

  editScenarioDialog(scenario: Scenario) {
    this.editScenario = scenario;
    this.displayDialog = true;
  }

  deleteScenarioById(scenarioId: number) {
    let tmpScenario = this.scenariosList?.find(scenario => scenario.id === scenarioId)
    if (tmpScenario) {
      this.scenarioService.deleteScenario(tmpScenario.id).subscribe(
        () => {
          this.scenarioService.getScenarios().subscribe({
            next: (data: Scenario[]) => {
              this.scenariosList = data;
            },
            complete: () => {

              this.loadingScenario = false;
            }
          })
        }
      );
    }
  }

  clearTable(table: Table) {
    table.clear();
    this.inputName = '';
    this.inputDescription = '';
    this.inputCreatedAt = '';
  }

  showScenarioMap(scenario: Scenario) {
    this.scenarioService.getScenarioMap(scenario.id).subscribe({
      next: (data: Blob) => {
        this.createImageFromBlob(data);
      },
      complete: () => {
        this.loadingMap = false;
      }
    })
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.map = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
