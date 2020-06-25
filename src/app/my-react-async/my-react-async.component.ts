import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DalService } from '../services/dal.service';

@Component({
  selector: 'app-my-react-async',
  templateUrl: './my-react-async.component.html',
  styleUrls: ['./my-react-async.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyReactAsyncComponent {

  errorMessage: string;

  constructor(private dalService: DalService) { }

  users$ = this.dalService.users$.pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

}
