import { Component, OnInit } from '@angular/core';
import { MySeqHighorderobservableDalService } from './my-seq-highorderobservable-dal.service';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-my-seq-highorderobservable',
  templateUrl: './my-seq-highorderobservable.component.html',
  styleUrls: ['./my-seq-highorderobservable.component.css']
})
export class MySeqHighorderobservableComponent implements OnInit {


  unknownResource$ = this.dal.unknownResource$
    .pipe(
      catchError(err => {
        console.log(err);
        return EMPTY;
      })
    );

  constructor(private dal: MySeqHighorderobservableDalService) { }

  ngOnInit() {
  }

}
