import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { MyParallelHighorderobservableDalService } from './my-parallel-highorderobservable-dal.service';

@Component({
  selector: 'app-my-parallel-highorderobservable',
  templateUrl: './my-parallel-highorderobservable.component.html',
  styleUrls: ['./my-parallel-highorderobservable.component.css']
})
export class MyParallelHighorderobservableComponent implements OnInit {

  unknownResource$ = this.dal.unknownResource$
  .pipe(
    catchError(err => {
      console.log(err);
      return EMPTY;
    })
  );

  constructor(private dal: MyParallelHighorderobservableDalService) { }

  ngOnInit() {
  }

}
