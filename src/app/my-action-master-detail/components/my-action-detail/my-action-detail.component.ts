import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MyActionMasterDetailDalService } from '../../my-action-master-detail-dal.service';
import { Subject, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-my-action-detail',
  templateUrl: './my-action-detail.component.html',
  styleUrls: ['./my-action-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyActionDetailComponent implements OnInit {

  errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  user$ = this.dal.selectedUser$
    .pipe(
      catchError(err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    );

  constructor(private dal: MyActionMasterDetailDalService) { }

  ngOnInit() {
  }

}
