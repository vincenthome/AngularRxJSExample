import { Component, OnInit } from '@angular/core';
import { MyAddSubjectMergeScanDalService } from './my-add-subject-merge-scan-dal.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { User } from '../models/post';

@Component({
  selector: 'app-my-add-subject-merge-scan',
  templateUrl: './my-add-subject-merge-scan.component.html',
  styleUrls: ['./my-add-subject-merge-scan.component.css']
})
export class MyAddSubjectMergeScanComponent implements OnInit {

  username = '';

  users$ = this.dal.usersWithAdd$
    .pipe(
      catchError(err => {
        console.log(err);
        return EMPTY;
      })
    );

  constructor(private dal: MyAddSubjectMergeScanDalService) { }

  ngOnInit() {
  }

  addUser() {
    const user = {
      username: this.username || 'John.Doe'
    } as User;
    this.dal.insertedUserAdded(user);
  }

}
