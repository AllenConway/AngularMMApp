
import { Injectable } from '@angular/core';
import { Cabin } from './models/cabin';
import { CABINS } from './models/mock-cabins';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { share } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// marks a class as available to Injector for creation
@Injectable(
  // {providedIn: 'root',}  //A6: 'providedIn' property. Allows service to dicatate it's module; Tree Shaking Providers (TSP)
)
export class CabinsService {

  private url = '../../assets/cabins.json';

  // Iteration 3: Observable
  public getCabinsObserver: Observer<any>;
  public getCabinsChanged$: Observable<any>;


  // Iteration 4: Subject
  // private getCabinsSource = new Subject<Cabin[]>();

  // Iteration 4: BehaviorSubject
  // private getCabinsSource = new BehaviorSubject<Cabin[]>([]);

  // Iteration 4 and 5: make an Observable of the Stream
  // public getCabinsChanged$ = this.getCabinsSource.asObservable(); // Observable stream

  constructor(private httpClient: HttpClient) {

    // Note: below lines are not needed for Subject or BehaviorSubject
    // Note RxJS v6 now requires the pipe() method in order to use the operators like share() or map()
    // share() operator Returns an observable sequence that shares
    // a single subscription to the underlying sequence.
    // Also makes the observable 'Hot' until there are no more subscriptions. Then it becomes 'Cold' and a new 'Subject' is created
    // this.getCabinsChanged$ = new Observable((observer: any) => this.getCabinsObserver = observer).pipe(share());

  }

  // Iteration 1: raw data return without observables
  getCabins(): Cabin[] {
    return CABINS;
  }

  // Iteration 2: return the observable directly
  // getCabins(): Observable<Cabin[]> {
  //   return this.httpClient.get<Cabin[]>(this.url);
  // }

  // Iteration 3: call next on the observable so anyone subscribing can get the updated data
//   getCabins() {
//     // window.setTimeout(() => {
//       this.httpClient.get<Cabin[]>(this.url).subscribe(data => {

//         // Observable
//         // if (data && this.getCabinsObserver) {
//         //   // additional logic
//         //   this.getCabinsObserver.next(data);
//         // }

//         // Subject and BehaviorSubject
//         if (data && this.getCabinsSource) {
//           this.getCabinsSource.next(data);
//         }

//        });
//     // }, 10000);
// }


}
