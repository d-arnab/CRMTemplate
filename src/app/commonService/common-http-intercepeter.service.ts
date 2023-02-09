import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, dematerialize, endWith, materialize, mergeMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommonHTTPIntercepeterService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url,method,headers,body} = req
        return of(null)
        .pipe(mergeMap(handleRoute))
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize())

        function handleRoute(){
            switch(true){
                case url.endsWith('/getSummeryOverviewDetails') && method === 'GET':
                    return getSummeryOverviewDetails();
                case url.endsWith('/getHighestACoSCampaigns') && method == 'GET':
                    return getHighestACoSCampaigns();
                case url.endsWith('/getTop5productsbySpendGraphData') && method == 'GET':
                  return getTop5productsbySpendGraphData();
                case url.endsWith('/getAllSales') && method == 'GET':
                    return getAllSales();
                case url.endsWith('/getCostGraphDetails') && method == 'GET':
                  return getCostGraphDetails();
                case url.endsWith('/getAllNotification') && method == 'GET':
                  return getAllNotification();
                default:
                    return next.handle(req)
            }
        }

        function getSummeryOverviewDetails(){
            let body = [
              {name: 'Overview', weight: 10079, color: '#d3e1fa'},
              {name: 'Campaigns', weight: 40026, color: '#d3f1f9'},
              {name: 'Ad Group', weight: 6941, color: '#d2f9e7'},
              {name: 'Keywords', weight: 90122, color: '#f8fad2'},
            ]
            return of ( new HttpResponse({status: 200, body}))
        }

        function getHighestACoSCampaigns(){
            let body = [
              {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
              {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
              {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
              {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
              {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
            ]
            return of(new HttpResponse({status:200, body}))
        }

        function getTop5productsbySpendGraphData(){
            let body = {
              datasets: [{
                data: [50, 40, 30, 20, 10],
                backgroundColor:['rgb(99 181 154)','rgb(110 200 152)','rgb(179 234 152)','rgb(255 193 142)','rgb(255 214 141)'],
                borderColor:['rgb(99 181 154)','rgb(110 200 152)','rgb(179 234 152)','rgb(255 193 142)','rgb(255 214 141)']
              }]
            }
            return of(new HttpResponse({status:200, body}))
        }

        function getCostGraphDetails(){
          let body = {
            datasets: [
              {
                data: [ 65, 59, 80, 81, 56, 55, 40 ],
                label: 'Costs',
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                fill: 'origin',
              }
            ],
            labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
          }
          return of(new HttpResponse({status:200, body}))
        }

        function getAllSales(){
          let body = [
            {heading: 'Orders Created', date: 'Oct 16/21-Nov 14/21', amount1: 134.970, amount2: 128.970},
            {heading: 'Total Sales', date: 'Oct 16/21-Nov 14/21', amount1: 8135.970, amount2: 128.970},
            {heading: 'PPC Sales', date: 'Oct 16/21-Nov 14/21', amount1: 134.970, amount2: 128.970},
            {heading: 'Units Sales', date: 'Oct 16/21-Nov 14/21', amount1: 134.970, amount2: 128.970},
            {heading: 'Organic Sales', date: 'Oct 16/21-Nov 14/21', amount1: 134.970, amount2: 128.970},
            {heading: 'Refunds', date: 'Oct 16/21-Nov 14/21', amount1: 134.970, amount2: 128.970}
          ]
          return of(new HttpResponse({status:200, body}))
        }

        function getAllNotification(){
          let body = {
            notificationBadge: '8'
          }
          return of(new HttpResponse({status:200, body}))
        }
  }
}

export const MokeHTTPRequestProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: CommonHTTPIntercepeterService,
  multi: true
}
