import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cabin } from './cabin';
import { CABINS } from './mock-cabins';
import { CabinsService } from './cabins.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-cabin-list',
  templateUrl: './cabin-list.component.html',
  styleUrls: ['./cabin-list.component.less']
})
export class CabinListComponent implements OnInit, OnDestroy {
  cabins = CABINS;
  selectedCabin: Cabin;
  private cabinsSubscription: Subscription;
  cabins$: Observable<Cabin[]>;

  constructor(private cabinsService: CabinsService) { }

  ngOnInit() {
    // Note: if out method returned an Observable instead of the Cabin[] data,
    // we'd be able to leverage auto-subscribe/unsubscribe via the async pipe
    this.cabinsSubscription = this.cabinsService.getCabinsChanged$.subscribe(data => this.onCabinsLoaded(data));
    // Note: this should really be in a centralized store and pulled (i.e. ngrx)
    this.cabinsService.getCabins();
  }

  ngOnDestroy(): void {
    // Prevent memory leak once component is destroyed
    this.cabinsSubscription.unsubscribe();
  }

  onCabinsLoaded(data: Cabin[]) {
    // Iteration 1: direct viewmodel assignment
    // this.cabins = data;

    // Iteration 2: make observable of the data
    this.cabins$ = of(data);
  }

  selectCabin(cabin: Cabin) {
    this.selectedCabin = cabin;
  }

}


