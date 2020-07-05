import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { MyLastonewinHighorderobservableDalService } from './my-lastonewin-highorderobservable-dal.service';

@Component({
  selector: 'app-my-lastonewin-highorderobservable',
  templateUrl: './my-lastonewin-highorderobservable.component.html',
  styleUrls: ['./my-lastonewin-highorderobservable.component.css']
})
export class MyLastonewinHighorderobservableComponent implements OnInit {

  unknownResource$ = this.dal.unknownResource$
  .pipe(
    catchError(err => {
      console.log(err);
      return EMPTY;
    })
  );

  constructor(private dal: MyLastonewinHighorderobservableDalService) { }

  ngOnInit() {
  }

}
