import { Injectable } from '@angular/core';
import {CommunicationService} from './communication.service';
import {OldMap} from './OldMap';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

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

  getOldMapMap(id: number): Observable<Blob> {
    return this.comService.get('/oldmaps/' + id + '/map', null as unknown as HttpHeaders, 'blob');
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
