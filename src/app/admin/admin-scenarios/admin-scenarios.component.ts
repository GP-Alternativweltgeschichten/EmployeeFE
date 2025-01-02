import {Component, OnChanges, OnInit} from '@angular/core';
import {Scenario} from '../../services/Scenario';
import {ScenarioService} from '../../services/scenario.service';
import {TranslateService} from '@ngx-translate/core';
import {Table} from 'primeng/table';

@Component({
  selector: 'app-admin-scenarios',
  templateUrl: './admin-scenarios.component.html',
  styleUrl: './admin-scenarios.component.css'
})
export class AdminScenariosComponent implements OnInit, OnChanges{
  tablePaginationSteps = [5, 10, 15, 20, 25, 30];
  tableRows = 20;

  displayDialog: boolean | undefined;
  editScenario: Scenario | null | undefined;
  loading = true;

  scenariosList: Scenario[] = [];

  constructor(public scenarioService: ScenarioService,
              public translate: TranslateService) {
  }

  ngOnInit() {
    this.scenarioService.getScenarios().subscribe({
      next: (data: Scenario[]) => {
        this.scenariosList = data;
      },
      complete: () => {
        this.loading = false;
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
    this.scenarioService.deleteScenario(tmpScenario as unknown as number).subscribe(
      () => {
        this.scenarioService.getScenarios().subscribe({
          next: (data: Scenario[]) => {
            this.scenariosList = data;
          },
          complete: () => {

            this.loading = false;
          }
        })
      }
    );
  }

  clearTable(table: Table) {
    table.clear();
  }
}
