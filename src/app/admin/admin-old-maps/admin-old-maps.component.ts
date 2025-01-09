import {Component, OnChanges, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {OldMapService} from '../../services/old-map.service';
import {OldMap} from '../../services/OldMap';
import {Table} from 'primeng/table';

@Component({
  selector: 'app-admin-old-maps',
  templateUrl: './admin-old-maps.component.html',
  styleUrl: './admin-old-maps.component.css'
})
export class AdminOldMapsComponent implements OnInit, OnChanges{
  tablePaginationSteps = [5, 10, 15, 20, 25, 30];
  tableRows = 20;

  displayDialog: boolean | undefined;
  editOldMap: OldMap | undefined | null;
  loadingOldMap = true;

  oldMapsList: OldMap[] = [];
  inputName: string = '';
  inputDateOfMap: string = '';
  inputCreatedAt: string = '';

  tmpBoolean = false;
  changeBoolean() {
    this.tmpBoolean = !this.tmpBoolean;
  }

  constructor(public oldMapService: OldMapService,
              public translate: TranslateService) {
  }

  ngOnInit() {
    this.oldMapService.getOldMaps().subscribe({
      next: (data: OldMap[]) => {
        this.oldMapsList = data;
      },
      complete: () => {
        this.loadingOldMap = false;
      }
    })
  }

  ngOnChanges() {
    this.editOldMap = null;
  }

  updateOldMapsList(oldMaps: OldMap[]) {
    this.oldMapsList = oldMaps;
  }

  addOldMapDialog() {
    this.editOldMap = null;
    this.displayDialog = true;
  }

  editOldMapDialog(oldMap: OldMap) {
    this.editOldMap = oldMap;
    this.displayDialog = true;
  }

  deleteOldMapById(oldMapId: number) {
    let tmpMap = this.oldMapsList?.find(oldMap => oldMap.id === oldMapId);
    this.oldMapService.deleteOldMap(tmpMap as unknown as number).subscribe(
      () => {
        this.oldMapService.getOldMaps().subscribe({
          next: (data: OldMap[]) => {
            this.oldMapsList = data;
          },
          complete: () => {
            this.loadingOldMap = false;
          }
        })
      }
    );
  }

  clearTable(table: Table) {
    table.clear();
    this.inputName = '';
    this.inputDateOfMap = '';
    this.inputCreatedAt = '';
  }

  showScenarioMap(oldMap: OldMap) {
    console.log('Show Scenario Map' + oldMap);
  }
}
