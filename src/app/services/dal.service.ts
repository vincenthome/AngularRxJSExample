import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { Post } from '../models/post';
import { User, ReqResResponse } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DalService {

  private rootReqRestUrl = 'https://reqres.in/api';
  private getUsersUrl = `${this.rootReqRestUrl}/users`;

  users$ = this.httpClient.get<ReqResResponse>(`${this.getUsersUrl}?page=2`).pipe(
    map(res => res.data as User[]),
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
