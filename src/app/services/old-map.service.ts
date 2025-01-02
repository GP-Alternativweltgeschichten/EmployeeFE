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
    return this.comService.get<OldMap[]>('/oldmaps');
  }

  getOldMap(id: number): Observable<OldMap> {
    return this.comService.get<OldMap>('/oldmaps/' + id);
  }

  createOldMap(oldMap: OldMap): Observable<OldMap> {
    return this.comService.post<OldMap>('/oldmaps', oldMap);
  }

  updateOldMap(oldMap: OldMap): Observable<OldMap> {
    return this.comService.put<OldMap>('/oldmaps', oldMap);
  }

  deleteOldMap(id: number): Observable<OldMap> {
    return this.comService.delete<OldMap>('/oldmaps/' + id);
  }
}
