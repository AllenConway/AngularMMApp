import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Cabin } from './models/cabin';
// import { CABINS } from './mock-cabins';
import { CabinsService } from './cabins.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-cabin-detail',
  templateUrl: './cabin-detail.component.html',
  styleUrls: ['./cabin-detail.component.less']
})
export class CabinDetailComponent implements OnInit, OnDestroy {
  @Input() cabin: Cabin;
  // cabin: Cabin;
  // cabins = CABINS;
  cabins: Cabin[];
  private cabinsSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private cabinsService: CabinsService) {
    this.cabinsService.getCabins();
  }

  ngOnInit() {

    // Iteration 1:
    // this.cabins = this.cabinsService.getCabins();

    // Iteration 2:
    // getCabins returns an Observable, so subscribe to the async data,
    // and use fat arrow syntax to assign data to our class property via function
    this.cabinsService.getCabins().subscribe(data => this.onCabinsLoaded(data));

    // Iteration 3:
    // window.setTimeout(() => {
    //   this.cabinsSubscription = this.cabinsService.getCabinsChanged$.subscribe(data => this.onCabinsLoaded(data));
    //   window.setTimeout(() => {
    //     this.cabinsService.getCabins();
    //   }, 5000);
    // }, 10000);



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
    this.cabin = this.cabins.find(c => c.id === id);
  }

  goBack(): void {
    this.location.back();
  }

}
