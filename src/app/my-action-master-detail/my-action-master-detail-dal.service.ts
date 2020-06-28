import { Injectable } from '@angular/core';
import { throwError, combineLatest, BehaviorSubject } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Post, User } from '../models/post';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyActionMasterDetailDalService {

  private rootUrl = 'https://jsonplaceholder.typicode1.com';
  private getUsersUrl = `${this.rootUrl}/users`;

  users$ = this.httpClient.get<User[]>(`${this.getUsersUrl}`)
      .pipe(
        tap(resp => resp),
        catchError(this.handleError)
      );

  selectedUserSubject = new BehaviorSubject<number>(0);
  selectedUserAction$ = this.selectedUserSubject.asObservable();

  selectedUser$ = combineLatest([this.users$, this.selectedUserAction$])
        .pipe(
          map(([users, selectedUser]) =>
            users.find(user =>
              user.id === selectedUser
              ))
        );

  constructor(private httpClient: HttpClient) { }

  selectedUserChanged(id: number) {
    this.selectedUserSubject.next(id);
  }

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
