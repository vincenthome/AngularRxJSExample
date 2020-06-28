import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MyActionMasterDetailDalService } from '../../my-action-master-detail-dal.service';
import { EMPTY, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-my-action-master',
  templateUrl: './my-action-master.component.html',
  styleUrls: ['./my-action-master.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyActionMasterComponent implements OnInit {

  errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  users$ = this.dal.users$
    .pipe(
      catchError(err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    );
  selectedUser$ = this.dal.selectedUser$;

  constructor(private dal: MyActionMasterDetailDalService) { }

  ngOnInit() {
  }

  onSelectedUser(id: number) {
    this.dal.selectedUserChanged(id);
  }
}
