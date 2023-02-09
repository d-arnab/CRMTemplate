import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/commonService/common.service';

interface Food {
  value: string;
  viewValue: string;
}

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  tabIndex:Tabs = Tabs.Overview;

  constructor(private commonService: CommonService) { }
  ngOnInit(): void {
    this.commonService.getData().subscribe((tabIndex:any)=>{
      this.tabIndex = tabIndex.index
      console.log("this.tabIndex:",this.tabIndex);
    })
  }

  campaignOne = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  campaignTwo = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

}

export enum Tabs{
  Overview = 0,
  PPC = 1,
  Year_To_Year = 2,
  Customize = 3
}
