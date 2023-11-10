import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Cabin } from '../models';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabinsSignalsService {

  public cabinsSignal = signal<Cabin[]>([]);
  private url = '../../assets/cabins.json';

  constructor(private httpClient: HttpClient) { }

  getCabins() {
    this.httpClient.get<Cabin[]>(this.url)
      .pipe(
        // catchError is part of RxJS; takes the error and returns a new observable throwing an error
        catchError(this.handleError)
      )
      .subscribe(data => {
        if (data) {
          // ...Execute any additional presetation layer logic, manipulation, here or donwstream as required
          // Call set on the Signal so anyone that needs alerted can get the updated data
          this.cabinsSignal.set(data);
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
