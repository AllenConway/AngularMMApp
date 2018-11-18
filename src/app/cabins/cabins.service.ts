
import { Injectable } from '@angular/core';
import { Cabin } from './cabin';
// import { CABINS } from './mock-cabins';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { share } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// marks a class as available to Injector for creation
@Injectable(
  // {providedIn: 'root',}  //A6: 'providedIn' property. Allows service to dicatate it's module
)
export class CabinsService {

  private url = '../../assets/cabins.json';

  // Observable
  // public getCabinsObserver: Observer<any>;
  // public getCabinsChanged$: Observable<any>;


  // Subject
  // private getCabinsSource = new Subject<Cabin[]>();

  // BehaviorSubject
  private getCabinsSource = new BehaviorSubject<Cabin[]>([]);

  public getCabinsChanged$ = this.getCabinsSource.asObservable(); // Observable stream

  constructor(private httpClient: HttpClient) {

    // Note RxJS v6 now requires the pipe() method in order to use the operators like share() or map()
    // share() operator Returns an observable sequence that shares
    // a single subscription to the underlying sequence.
    // Also makes the observable 'Hot' until there are no more subscriptions. Then it becomes 'Cold' and a new 'Subject' is created
    // this.getCabinsChanged$ = new Observable((observer: any) => this.getCabinsObserver = observer).pipe(share());

  }

  // getCabins(): Cabin[] {
  //   return CABINS;
  // }

  // getCabins(): Observable<Cabin[]> {
  //   return this.httpClient.get<Cabin[]>(this.url);
  // }

  getCabins() {
    // window.setTimeout(() => {
      this.httpClient.get<Cabin[]>(this.url).subscribe(data => {

        // // Observable
        // if (data && this.getCabinsObserver) {
        //   this.getCabinsObserver.next(data);
        // }

        // Subject and BehaviorSubject
        if (data && this.getCabinsSource) {
          this.getCabinsSource.next(data);
        }

      });
    // }, 10000);

  }

}
