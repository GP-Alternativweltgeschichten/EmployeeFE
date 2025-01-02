import {Injectable} from '@angular/core';
import {CommunicationService} from './communication.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromptingService {

  constructor(private comService: CommunicationService) { }

  sendText(text: string): Observable<String> {
    return this.comService.post<String>('/prompting/text', text);
  }

}
