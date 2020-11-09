
import { Component, OnInit } from '@angular/core';
import {Dashboard} from '../dashboard';
import { DashboardService } from './../dashboard.service';
import {DASHBOARDS } from "./../menu";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedMenu: Dashboard;
  dashboards :  Dashboard[];
  constructor(private DashboardService:DashboardService) { }

  ngOnInit(): void {
    this.getMenus();
  }

  onSelect(dashboard:Dashboard):void{
    this.selectedMenu = dashboard;
  }
   getMenus():void{
     this.DashboardService.getMenus().subscribe(dashboards=>this.dashboards=dashboards);
   }

}
