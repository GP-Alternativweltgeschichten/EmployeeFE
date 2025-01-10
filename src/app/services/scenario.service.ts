import { Injectable } from '@angular/core';
import {CommunicationService} from './communication.service';
import {Observable} from 'rxjs';
import {Scenario} from './Scenario';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

  constructor(private comService: CommunicationService) { }

  getScenarios(): Observable<Scenario[]> {
    return this.comService.get<Scenario[]>('/scenarios');
  }

  getScenario(id: number): Observable<Scenario> {
    return this.comService.get<Scenario>('/scenarios/' + id);
  }

  getScenarioMap(id: number): Observable<Blob> {
    return this.comService.get('/scenarios/' + id + '/map', null as unknown as HttpHeaders, 'blob');
  }

  createScenario(scenario: Scenario): Observable<Scenario> {
    return this.comService.post<Scenario>('/scenarios', scenario);
  }

  updateScenario(scenario: Scenario): Observable<Scenario> {
    return this.comService.put<Scenario>('/scenarios', scenario);
  }

  deleteScenario(id: number): Observable<Scenario> {
    return this.comService.delete<Scenario>('/scenarios/' + id);
  }
}
