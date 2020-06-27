import { Injectable } from '@angular/core';
import { throwError, combineLatest } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Post, User } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class MyCombineDalService {

  private rootUrl = 'https://jsonplaceholder.typicode.com';
  private getPostsUrl = `${this.rootUrl}/posts`;
  private getUsersUrl = `${this.rootUrl}/users`;

  posts$ = this.httpClient.get<Post[]>(`${this.getPostsUrl}?page=1`)
    .pipe(
      tap(data => console.log('Posts: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  users$ = this.httpClient.get<User[]>(`${this.getUsersUrl}`)
    .pipe(
      tap(data => console.log('Users: ', JSON.stringify(data))),
      catchError(this.handleError)
    );

  postsWithUser$ = combineLatest([this.posts$, this.users$])
      .pipe(
        map(([posts, users]) =>
          posts.map(post => ({
            ...post,
            userId: post.userId * 100,
            title: `Title: ${post.title}`,
            username: users.find(user => user.id === post.userId).username
          })))
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
