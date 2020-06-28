import { Component, OnInit } from '@angular/core';
import { MyErrorSubjectDalService } from './my-error-subject-dal.service';
import { Subject, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-my-error-subject',
  templateUrl: './my-error-subject.component.html',
  styleUrls: ['./my-error-subject.component.css']
})
export class MyErrorSubjectComponent implements OnInit {

  errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  response$ = this.dal.response$
    .pipe(
      catchError(err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    );

  constructor(private dal: MyErrorSubjectDalService) { }

  ngOnInit() {
  }

}
