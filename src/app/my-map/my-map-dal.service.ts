import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ReqResResponse } from '../models/user';
import { map, catchError } from 'rxjs/operators';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class MyMapDalService {

  private rootUrl = 'https://jsonplaceholder.typicode.com';
  private getUrl = `${this.rootUrl}/posts`;

  posts$ = this.httpClient.get<Post[]>(`${this.getUrl}?page=1`)
    .pipe(
      map(resp => resp.map(post =>
        ({
            ...post,
            userId: post.userId * 100,
            title: `Title: ${post.title}`,
            searchKey: [post.id]
          } as Post)
      )),
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
