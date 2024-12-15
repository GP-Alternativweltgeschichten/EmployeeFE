import { Injectable } from '@angular/core';
import {CommunicationService} from './communication.service';
import {OldMap} from './OldMap';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OldMapService {

  constructor(private comService: CommunicationService) { }

  getOldMaps(): Observable<OldMap[]> {
    return this.comService.get<OldMap[]>('/old_maps');
  }

  getOldMap(id: number): Observable<OldMap> {
    return this.comService.get<OldMap>('/old_maps/' + id);
  }

  createOldMap(oldMap: OldMap): Observable<OldMap> {
    return this.comService.post<OldMap>('/old_maps', oldMap);
  }

  updateOldMap(oldMap: OldMap): Observable<OldMap> {
    return this.comService.put<OldMap>('/old_maps', oldMap);
  }

  deleteOldMap(id: number): Observable<OldMap> {
    return this.comService.delete<OldMap>('/old_maps/' + id);
  }
}
