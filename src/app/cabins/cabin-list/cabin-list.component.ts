import { Component, OnInit, OnDestroy, Signal, signal } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Cabin } from '../models/cabin';
import { CABINS } from '../models/mock-cabins';
import { CabinsService } from '../services/cabins.service';
import { CabinsSignalsService } from '../services/cabins.signals.service';


@Component({
  selector: 'app-cabin-list',
  templateUrl: './cabin-list.component.html',
  styleUrls: ['./cabin-list.component.scss']
})
export class CabinListComponent implements OnInit, OnDestroy {

  cabins = CABINS;
  selectedCabin: Cabin;
  private cabinsSubscription: Subscription;
  cabins$: Observable<Cabin[]>;
  public cabinsSignal = signal<Cabin[]>([]);

  // Leveraging Signals instead of RxJS Observables
   

  constructor(private cabinsSignalsService: CabinsSignalsService) {
    this.cabinsSignal = this.cabinsSignalsService.cabinsSignal;
  }

  ngOnInit() {
    // We could also leverage auto-subscribe/unsubscribe via the async pipe
    // by using this.cabins$ = this.cabinsService.getCabinsChanged$
    //this.cabinsSubscription = this.cabinsService.getCabinsChanged$.subscribe(data => this.onCabinsLoaded(data));
    this.cabinsSignalsService.getCabins();
  }

  ngOnDestroy(): void {
    // Prevent memory leak once component is destroyed
    if (this.cabinsSubscription) {
      this.cabinsSubscription.unsubscribe();
    }
  }

  onCabinsLoaded(data: Cabin[]) {
    // make observable of the data
    this.cabins$ = of(data);
  }

  selectCabin(cabin: Cabin) {
    this.selectedCabin = cabin;
  }

}


