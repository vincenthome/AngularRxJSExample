import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyErrorSubjectDalService {

  response$ = this.httpClient.get('https://api.github.com/404-not-found')
    .pipe(
      tap(resp => resp),
      catchError(this.handleError)
    );

    constructor(private httpClient: HttpClient) { }

    private handleError(err: HttpErrorResponse) {
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        errorMessage = `Error: ${err.error.message}`;
      } else {
        errorMessage = `Server http status code: ${err.status}, error: ${err.message}`;
      }
      console.log(err);
      return throwError(errorMessage);
    }

}
