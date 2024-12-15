import { Injectable } from '@angular/core';
import {CommunicationService} from './communication.service';
import {Observable} from 'rxjs';
import {Scenario} from './Scenario';

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
