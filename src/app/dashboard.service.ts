import { MessagesService } from './messages.service';
import { DASHBOARDS } from './menu';
import { Dashboard } from './dashboard';
import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getMenus(): Observable<Dashboard[]>{
   this.messagesService.add('Menus fetched');
    return of(DASHBOARDS);
  }

  constructor(private messagesService:MessagesService) { }
}
