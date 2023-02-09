import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { CommonHTTPServiceService } from 'src/app/commonService/common-http-service.service';
import { CommonService } from 'src/app/commonService/common.service';

export interface tab{
  tab: string,
  index:string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  constructor( private commonHTTPServiceService: CommonHTTPServiceService, private commonService: CommonService ) { }

  myControl = new FormControl<string | tab>('');
  options: any = [{tab:'Overview', index: '0'}, {tab:'PPC', index:'1'}, {tab:'Year to Year', index:'2'}, {tab:'Customize', index:'3'}];
  filteredOptions: Observable<tab[]>;
  notification:any

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const tab = typeof value === 'string' ? value : value?.tab;
        return tab ? this._filter(tab as string) : this.options.slice();
      }),
    );
    combineLatest({
      notification:this.commonHTTPServiceService.getAllNotification()
    }).pipe(map((resp)=>{
      this.notification = resp.notification;
      console.log("resp:",resp);
    })).subscribe()
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option:any) => option.tab.toLowerCase().includes(filterValue));
  }

  displayFn(option:any): string {
    return option? option.tab: option;
  }

  selectOption( selectedData:any){
    this.commonService.setData(selectedData);
  }

}
