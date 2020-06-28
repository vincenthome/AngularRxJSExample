import { Component, OnInit } from '@angular/core';
import { MyActionDalService } from './my-action-dal.service';
import { catchError, filter, map } from 'rxjs/operators';
import { EMPTY, BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-my-action',
  templateUrl: './my-action.component.html',
  styleUrls: ['./my-action.component.css']
})
export class MyActionComponent implements OnInit {

  private selectedUserSubject = new BehaviorSubject<number>(0);
  selectedUserAction$ = this.selectedUserSubject.asObservable();

  posts$ = combineLatest([this.dal.postsWithUser$, this.selectedUserSubject])
    .pipe(
      map(([posts, selectedUserId]) =>
        posts.filter(post =>
          selectedUserId ? post.userId === selectedUserId : true)),
      catchError(err => {
        console.log(err);
        return EMPTY;
      })
    );

  users$ = this.dal.users$
      .pipe(
        catchError(err => {
          console.log(err);
          return EMPTY;
        })
      );



  // postsSimpleFilter$ = this.dal.postsWithUser$
  //     .pipe(
  //       map(posts =>
  //         posts.filter(post =>
  //           this.selectedUserId ? post.userId === this.selectedUserId : true
  //       ))
  //     );

  constructor(private dal: MyActionDalService) { }

  ngOnInit() {
  }

  onSelected(id: string) {
    this.selectedUserSubject.next(+id);
  }
}
