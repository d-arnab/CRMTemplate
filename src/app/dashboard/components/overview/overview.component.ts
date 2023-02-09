import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { combineLatest, map } from 'rxjs';
import { CommonHTTPServiceService } from 'src/app/commonService/common-http-service.service';

export interface PeriodicElement {
  name: string;
  weight: number;
  color: string
}


export interface SecondPeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface sales {
  heading: string;
  date: string;
  amount1: number;
  amount2: number;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OverviewComponent implements OnInit, AfterViewInit  {

  @ViewChild('dashboardChart') canvasRef: ElementRef;
  ctx: any;
  myDoughnutChart:any

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor(private elementRef: ElementRef, private commonHTTPServiceService: CommonHTTPServiceService) { }
  Datasource: PeriodicElement[];
  dataSource:SecondPeriodicElement[];
  salesData:sales[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dognut chart data start
  topProductsSpendGraphData:any
  //dognut chart data end

  public lineChartData: ChartConfiguration['data']

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        }
    },

    plugins: {
      legend: { display: false },
    }
  };
  // line chart data start
  public lineChartType: ChartType = 'line';
  //line chart data end
  ngAfterViewInit(){
    //dognut chart start
    combineLatest({
      productsBySpendGraphData: this.commonHTTPServiceService.getTop5productsbySpendGraphData(),
      lineChartData: this.commonHTTPServiceService.getCostGraphDetails()
    }).pipe(map((resp)=>{
        this.topProductsSpendGraphData = resp.productsBySpendGraphData
        this.ctx = this.canvasRef.nativeElement.getContext('2d');
        this.myDoughnutChart = new Chart(this.ctx, {
        type: 'doughnut',
        data: this.topProductsSpendGraphData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            rotation: -90,
            circumference: 180,
          }
        });
        //dognut chart end
        //line chart data start
        this.lineChartData = resp.lineChartData;
        //line chart data end
    })).subscribe()
  }

  getColor(index:any){
    return this.Datasource[index].color
  }

  ngOnInit(): void {
    combineLatest({
      Datasource: this.commonHTTPServiceService.getSummeryOverviewDetails(),
      dataSource: this.commonHTTPServiceService.getHighestACoSCampaigns(),
      salesData: this.commonHTTPServiceService.getAllSales()
    }).pipe(map((resp)=>{
      console.log("resp:",resp);
      this.Datasource = resp.Datasource;
      this.dataSource = resp.dataSource;
      this.salesData = resp.salesData;
    })).subscribe()
    
  }

}
