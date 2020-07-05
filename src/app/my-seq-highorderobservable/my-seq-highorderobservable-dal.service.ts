import { Injectable } from '@angular/core';
import { throwError, from } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { tap, catchError, take, concatMap, map, concatAll } from 'rxjs/operators';
import { ReqResResponse, User, UnknownResource } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MySeqHighorderobservableDalService {

  private rootReqRestUrl = 'https://reqres.in/api';
  private getUsersUrl = `${this.rootReqRestUrl}/users`;
  private getUnknownResourceUrl = `${this.rootReqRestUrl}/unknown`;

  unknownResource$ = this.httpClient.get<ReqResResponse>(`${this.getUsersUrl}/?delay=3`)
    .pipe(
      map(res => res.data as User[]),
      concatAll(),
      concatMap(user => this.httpClient.get<ReqResResponse>(`${this.getUnknownResourceUrl}/${user.id}?delay=1`)),
      map(res => res.data as UnknownResource),
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
