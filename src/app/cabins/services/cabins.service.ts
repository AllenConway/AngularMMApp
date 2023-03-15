
import { Injectable } from '@angular/core';
import { Cabin } from '../models/cabin';
import { CABINS } from '../models/mock-cabins';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { share, catchError, map } from 'rxjs/operators';
import { BehaviorSubject, throwError, of, Observable } from 'rxjs';

// marks a class as available to Injector for creation
@Injectable(
  {providedIn: 'root'}  // A6: 'providedIn' property. Allows service to dicatate it's module; Tree Shaking Providers (TSP)
)
export class CabinsService {

  private url = '../../assets/cabins.json';
  // Use the following line to force an error and generate a 404
  // private url = '../../assets/blah/cabins.json';

  // Iteration 3: Observable
  // private getCabinsObserver: Observer<any>;
  // public getCabinsChanged$: Observable<any>;


  // Iteration 4: Subject
  // private getCabinsSource = new Subject<Cabin[]>();

  // Iteration 4: BehaviorSubject
  private getCabinsSource = new BehaviorSubject<Cabin[]>([]);

  // Iteration 4 and 5: make an Observable of the Stream
  public getCabinsChanged$ = this.getCabinsSource.asObservable(); // Observable stream

  behaviorSubject: BehaviorSubject<Cabin[]>;
  getUsers(): BehaviorSubject<Cabin[]> {
    return this.behaviorSubject;
  }

  constructor(private httpClient: HttpClient) {
    // Iteration 3:
    // Note: below lines are not needed for Subject or BehaviorSubject
    // Note RxJS v6 now requires the pipe() method in order to use the operators like share() or map()
    // share() operator Returns an observable sequence that shares
    // a single subscription to the underlying sequence. (share is a cheap way to get a hot observable)
    // Also makes the observable 'Hot' until there are no more subscriptions. Then it becomes 'Cold' and a new 'Subject' is created
    // this.getCabinsChanged$ = new Observable((observer: any) => this.getCabinsObserver = observer).pipe(share());
  }

  // Iteration 1: raw data return without observables
  // getCabins(): Cabin[] {
  //   return CABINS;
  // }

  // Iteration 2: return the observable directly
  // getCabins(): Observable<Cabin[]> {
  //   return this.httpClient.get<Cabin[]>(this.url).pipe(
  //     map((data: Cabin[]) => {
  //       console.log(data[0].name);
  //       return data;
  //     }),
  //     // catchError is part of RxJS; takes the error and returns a new observable throwing an error
  //     catchError(this.handleError)
  //   );
  // }

  // Iteration 3 & 4: call next on the observable so anyone subscribing can get the updated data
  getCabins() {
    this.httpClient.get<Cabin[]>(this.url)
      .pipe(
        // catchError is part of RxJS; takes the error and returns a new observable throwing an error
        catchError(this.handleError)
      )
      .subscribe(data => {

        // Iteration 3: Observable
        // if (data && this.getCabinsObserver) {
        //   // additional logic
        //   this.getCabinsObserver.next(data);
        // }

        // Iteration 4: Subject and BehaviorSubject
        if (data && this.getCabinsSource) {
          this.getCabinsSource.next(data);
        }

      });
  }

  // Observable<never> protects integrity of original observable (i.e. getCabinsChanged$) 
  // to not mutate it as it omits nothing and never completes
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(() => {return 'Something bad happened; please try again later.'});
  }

}
