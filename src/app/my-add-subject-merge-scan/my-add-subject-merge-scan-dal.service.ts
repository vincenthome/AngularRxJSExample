import { Injectable } from '@angular/core';
import { throwError, combineLatest, BehaviorSubject, Subject, merge } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { map, catchError, tap, scan } from 'rxjs/operators';
import { User } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class MyAddSubjectMergeScanDalService {

  private rootUrl = 'https://jsonplaceholder.typicode.com';
  private getUsersUrl = `${this.rootUrl}/users`;

  private insertedUserSubject = new Subject<User>();
  private insertedUserAction$ = this.insertedUserSubject.asObservable();

  users$ = this.httpClient.get<User[]>(`${this.getUsersUrl}`)
      .pipe(
        tap(resp => resp),
        catchError(this.handleError)
      );

  usersWithAdd$ = merge(this.users$, this.insertedUserAction$)
        .pipe(
          scan((acc: User[], value: User) => [...acc, value]),
          catchError(this.handleError)
        );

  insertedUserAdded(user: User) {
    // http post user THEN
    this.insertedUserSubject.next(user);
  }

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
