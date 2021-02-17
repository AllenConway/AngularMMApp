import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Cabin } from '../models/cabin';
// import { CABINS } from './mock-cabins';
import { CabinsService } from '../services/cabins.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-cabin-detail',
  templateUrl: './cabin-detail.component.html',
  styleUrls: ['./cabin-detail.component.less']
})
export class CabinDetailComponent implements OnInit, OnDestroy {
  @Input() cabin: Cabin;
  @Input() greetingMessage: string;
  // cabin: Cabin;
  // cabins = CABINS;
  cabins: Cabin[];
  private cabinsSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private cabinsService: CabinsService) {

    // Iteration 3: If this line is called with no subscription, data is loaded into the observable in the service,
    // but subscription on line 44 won't pick up data as next isn't called subsequently unless line 46 is uncommented to force data be returned.
    // This is all to show how the different types of observables behave. Just because we subscribed, doesn't mean
    // we will get data. For that we need a BehaviorSubject which will stream the last know value
    // this.cabinsService.getCabins();
  }

  ngOnInit() {

    // Iteration 1: raw data being returned
    this.cabins = this.cabinsService.getCabins();
    this.getCabin();

    // Iteration 2: subscribe to the observable that is directly returned
    // getCabins returns an Observable, so subscribe to the async data,
    // and use fat arrow syntax to assign data to our class property via function
    // this.cabinsService.getCabins().subscribe(data => this.onCabinsLoaded(data));

    // Iteration 4: If the timeout is added, and line 31 is uncommented, it shows an observable that has already broadcast its information
    // and we don't get previously streamed value. We must call getCabins again to make observable broadcast data
    //  window.setTimeout(() => {
    //     // Iteration 3/4/5: subscribe to exposed observable on the service
        //  this.cabinsSubscription = this.cabinsService.getCabinsChanged$.subscribe(data => this.onCabinsLoaded(data));
    // //     // If this line below is removed and timeouts are added, we will not have data from simply subscribing to the observable above
          // this.cabinsService.getCabins();
    //     window.setTimeout(() => {
    // //          // next() isn't called until this line is hit and then we'll get our data
    //       this.cabinsService.getCabins();
    //     }, 5000);
    //  }, 2500);

  }

  ngOnDestroy(): void {
    if (this.cabinsSubscription) {
      this.cabinsSubscription.unsubscribe();
    }
  }

  onCabinsLoaded(data: Cabin[]) {
    this.cabins = data;
    this.getCabin();

  }

  getCabin(): void {
    const id = +this.route.snapshot.paramMap.get('id');  // unary "+" operator which yields a numeric expression
    this.cabin = this.cabins?.find(c => c.id === id);
  }

  goBack(): void {
    this.location.back();
  }

}
