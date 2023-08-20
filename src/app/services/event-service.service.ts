import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  private dataObj: string = "User";


  triggerData = new BehaviorSubject(localStorage.getItem(this.dataObj));
  triggeredData = this.triggerData.asObservable();

  constructor() { }

  setData(data) {
    localStorage.setItem(this.dataObj, data);
    this.triggerData.next(data);
  }
}