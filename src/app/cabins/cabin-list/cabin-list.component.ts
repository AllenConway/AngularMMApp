import { Component, OnInit, signal } from '@angular/core';

import { Observable } from 'rxjs';
import { Cabin } from '../models/cabin';
import { CABINS } from '../models/mock-cabins';
import { CabinsSignalsService } from '../services/cabins.signals.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-cabin-list',
    imports: [RouterModule],
    templateUrl: './cabin-list.component.html',
    styleUrls: ['./cabin-list.component.scss']
})
export class CabinListComponent implements OnInit {

  cabins = CABINS;
  selectedCabin: Cabin;
  cabins$: Observable<Cabin[]>;
  public cabinsSignal = signal<Cabin[]>([]);

  // Leveraging Signals instead of RxJS Observables
  constructor(private cabinsSignalsService: CabinsSignalsService) {
    this.cabinsSignal = this.cabinsSignalsService.cabinsSignal;
  }

  ngOnInit() {
    // Be alerted when this Cabins signal changes
    this.cabinsSignalsService.getCabins();
  }

  selectCabin(cabin: Cabin) {
    this.selectedCabin = cabin;
  }

}