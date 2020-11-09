import { Component, OnInit ,Input} from '@angular/core';
import { Dashboard} from "./../dashboard";


@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {

  @Input() dashboard: Dashboard;
  constructor() { }

  ngOnInit(): void {
  }

}
