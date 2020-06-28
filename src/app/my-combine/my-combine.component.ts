import { Component, OnInit } from '@angular/core';
import { MyCombineDalService } from './my-combine-dal.service';
import { combineLatest, empty, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-my-combine',
  templateUrl: './my-combine.component.html',
  styleUrls: ['./my-combine.component.css']
})
export class MyCombineComponent implements OnInit {

  posts$ = this.dal.postsWithUser$
  .pipe(
    catchError(err => {
      console.log(err);
      return EMPTY;
    })
  );

  constructor(private dal: MyCombineDalService) { }

  ngOnInit() {
  }

}
