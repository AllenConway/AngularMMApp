
import { Injectable } from '@angular/core';
import { Cabin } from '../models/cabin';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, throwError, of, Observable } from 'rxjs';

// marks a class as available to Injector for creation
@Injectable(
  // A6: 'providedIn' property. service becomes available as a singleton for the entire application
  // and can be injected into any part of your app; Tree Shaking Providers (TSP)
  { providedIn: 'root' }  
)
export class CabinsService {

  private url = '../../assets/cabins.json';
  // Use the following line to force an error and generate a 404
  // private url = '../../assets/blah/cabins.json';

  // BehaviorSubject usage for state
  private getCabinsSource = new BehaviorSubject<Cabin[]>([]);

  // Make an Observable of the Stream
  public getCabinsChanged$ = this.getCabinsSource.asObservable();

  behaviorSubject: BehaviorSubject<Cabin[]>;
  getUsers(): BehaviorSubject<Cabin[]> {
    return this.behaviorSubject;
  }

  constructor(private httpClient: HttpClient) {
  }

  getCabins() {
    this.httpClient.get<Cabin[]>(this.url)
      .pipe(
        // catchError is part of RxJS; takes the error and returns a new observable throwing an error
        catchError(this.handleError)
      )
      .subscribe(data => {

        // Leverage RxJS and the BehaviorSubject
        if (data && this.getCabinsSource) {
          // ...Execute any additional presetation layer logic, manipulation, here or donwstream as required
          // Execute next on the observable so anyone subscribing can get the updated data
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
    return throwError(() => { return 'Something bad happened; please try again later.' });
  }

}
