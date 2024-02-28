import { Component, OnInit } from '@angular/core';
import { CabinsService } from '../cabins';
import { Observable, Subscription, of } from 'rxjs';
import { Cabin } from '../cabins/models/cabin';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private cabinsService: CabinsService) {
    this.cabins$ = of([]);
  }
  cabins$: Observable<Cabin[]>;
  // private cabinsSubscription: Subscription;

  ngOnInit() {
    // As the root/parent componenet, make call to get cabin data that for downstream componenets can be retrieved via BehaviorSubject observable
    this.cabinsService.getCabins();
    // Leveraging an async pipe, so direct subscription not required
    // this.cabinsSubscription = this.cabinsService.getCabinsChanged$.subscribe(data => this.onCabinsLoaded(data));
    this.cabins$ = this.cabinsService.getCabinsChanged$;
  }

  onCabinsLoaded(data: Cabin[]) {
    // Make observable of the data
    this.cabins$ = of(data);
  }

}
