import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  public data = new BehaviorSubject<Array<any>>([]);
  public shown = new BehaviorSubject(false);

  shown$ = this.shown.asObservable();
  data$ = this.data.asObservable();

  changeCount(data: any) {
    console.log(data);
    // alert()
    this.data.next(data);
  }
  changeView(shown: boolean) {
    this.shown.next(shown);
  }
  


}
