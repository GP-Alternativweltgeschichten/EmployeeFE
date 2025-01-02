import {Injectable} from '@angular/core';
import {CommunicationService} from './communication.service';
import {Observable} from 'rxjs';
import {Map} from './Map';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private comService: CommunicationService) { }

  getMaps(): Observable<Map[]> {
    return this.comService.get<Map[]>('/maps');
  }

  getMap(id: number): Observable<Map> {
    return this.comService.get<Map>('/maps/' + id);
  }

  createMap(map: Map): Observable<Map> {
    return this.comService.post<Map>('/maps', map);
  }

  updateMap(map: Map): Observable<Map> {
    return this.comService.put<Map>('/maps', map);
  }

  deleteMap(id: number): Observable<Map> {
    return this.comService.delete<Map>('/maps/' + id);
  }
}
