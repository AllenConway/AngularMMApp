import { Component, OnInit } from '@angular/core';
import { CabinsService } from '../cabins';
import { Observable } from 'rxjs';
import { Cabin } from '../cabins/models/cabin';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private cabinsService: CabinsService) { }

  cabins$: Observable<Cabin[]>;

  ngOnInit() {

    this.cabins$ = this.cabinsService.getCabins();

  }

}
