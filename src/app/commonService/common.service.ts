import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public sharedData: any

  constructor() {
    this.sharedData = new BehaviorSubject("started")
   }

   setData(data:any){
    return this.sharedData.next(data);
  }
  getData(){
      return this.sharedData.asObservable()
  }
}
