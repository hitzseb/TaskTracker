import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask:boolean = false;
  private showAbout:boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask():void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  toggleAbout():void {
    this.showAbout = !this.showAbout;
    this.subject.next(this.showAbout);
  }

  onToggle():Observable<any> {
    return this.subject.asObservable();
  }
}
