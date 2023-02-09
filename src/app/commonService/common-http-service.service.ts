import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOption ={
  Headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'abc'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CommonHTTPServiceService {

  constructor(private http: HttpClient) { }

  public getSummeryOverviewDetails(){
    return this.getBackEndData('/getSummeryOverviewDetails')
  }
  public getHighestACoSCampaigns(){
    return this.getBackEndData('/getHighestACoSCampaigns')
  }
  public getTop5productsbySpendGraphData(){
    return this.getBackEndData('/getTop5productsbySpendGraphData')
  }
  public getAllSales(){
    return this.getBackEndData('/getAllSales')
  }
  public getCostGraphDetails(){
    return this.getBackEndData('/getCostGraphDetails')
  }

  public getAllNotification(){
    return this.getBackEndData('/getAllNotification')
  }

  private getBackEndData(url: string){
    return this.http.get<any>(url)
  }
}
