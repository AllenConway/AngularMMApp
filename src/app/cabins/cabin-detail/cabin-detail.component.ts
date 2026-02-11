import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Cabin } from '../models/cabin';
import { CabinsService } from '../services/cabins.service';
import { Subscription } from 'rxjs';

import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-cabin-detail',
    imports: [RouterModule],
    templateUrl: './cabin-detail.component.html',
    styleUrls: ['./cabin-detail.component.scss']
})
export class CabinDetailComponent implements OnInit, OnDestroy {
  @Input() cabin: Cabin;
  @Input() greetingMessage: string;
  @Input() id = ''; // ng16 component route parameter mapping
  cabins: Cabin[];
  private cabinsSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private cabinsService: CabinsService) {
  }

  ngOnInit() {
    this.cabinsSubscription = this.cabinsService.getCabinsChanged$.subscribe(data => this.onCabinsLoaded(data));
    this.cabinsService.getCabins();
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
    // using traditional ActivatedRoute to get parameter
    //const id = +this.route.snapshot.paramMap.get('id');  // unary "+" operator which yields a numeric expression

    // ng16 route input parameters where we can access the private variable already defined streamlining code
    this.cabin = this.cabins?.find(c => c.id === +this.id);
  }

  goBack(): void {
    this.location.back();
  }

}
