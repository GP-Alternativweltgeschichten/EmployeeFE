import {Component, OnChanges, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {OldMapService} from '../services/old-map.service';
import {OldMap} from '../services/OldMap';
import {Table} from 'primeng/table';

@Component({
  selector: 'app-old-maps',
  templateUrl: './old-maps.component.html',
  styleUrl: './old-maps.component.css'
})
export class OldMapsComponent implements OnInit, OnChanges{
  tablePaginationSteps = [5, 10, 15, 20, 25, 30];
  tableRows = 10;

  displayDialog: boolean | undefined;
  editOldMap: OldMap | undefined | null;
  loadingOldMap = true;

  oldMapsList: OldMap[] = [];
  inputName: string = '';
  inputDateOfMap: string = '';
  inputCreatedAt: string = '';

  map: any;
  loadingMap = true;

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
    let tmpOldMap = this.oldMapsList?.find(oldMap => oldMap.id === oldMapId);
    if (tmpOldMap) {
      this.oldMapService.deleteOldMap(tmpOldMap.id).subscribe(
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

  }

  clearTable(table: Table) {
    table.clear();
    this.inputName = '';
    this.inputDateOfMap = '';
    this.inputCreatedAt = '';
  }

  showOldMapMap(oldMap: OldMap) {
    this.oldMapService.getOldMapMap(oldMap.id).subscribe({
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
