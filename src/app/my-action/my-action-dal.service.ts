import { Injectable } from '@angular/core';
import { throwError, combineLatest } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { User, Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class MyActionDalService {

  private rootUrl = 'https://jsonplaceholder.typicode.com';
  private getPostsUrl = `${this.rootUrl}/posts`;
  private getUsersUrl = `${this.rootUrl}/users`;

  posts$ = this.httpClient.get<Post[]>(`${this.getPostsUrl}?page=1`)
    .pipe(
      tap(resp => resp),
      catchError(this.handleError)
    );

  users$ = this.httpClient.get<User[]>(`${this.getUsersUrl}`)
      .pipe(
        tap(resp => resp),
        catchError(this.handleError)
      );

  postsWithUser$ = combineLatest([this.posts$, this.users$])
        .pipe(
          map(([posts, users]) =>
            posts.map(post =>
              ({
                ...post,
                username: users.find(user => post.userId === user.id).username
              } as Post)
            ))
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
