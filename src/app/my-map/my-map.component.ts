import { Component, OnInit } from '@angular/core';
import { MyMapDalService } from './my-map-dal.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.css']
})
export class MyMapComponent implements OnInit {

  posts$ = this.dal.posts$
    .pipe(
      catchError(err => {
        console.log(err);
        return EMPTY;
      })
    );

  constructor(private dal: MyMapDalService) { }

  ngOnInit() {
  }

}
