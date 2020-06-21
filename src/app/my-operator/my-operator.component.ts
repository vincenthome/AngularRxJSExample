import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-my-operator',
  templateUrl: './my-operator.component.html',
  styleUrls: ['./my-operator.component.css']
})
export class MyOperatorComponent implements OnInit, OnDestroy {

  log: string[] = [];

  from$ = from([20, 15, 10, 5]);
  subFrom: Subscription;

  constructor() { }

  ngOnInit() {
    this.subFrom = this.from$.pipe(
      tap(i => this.log.push(`tap ${i}`)),
      map(i => i * 2),
      tap(i => this.log.push(`tap (x * 2) = ${i}`)),
      map(i => i - 10),
      tap(i => this.log.push(`tap (x - 10) = ${i}`)),
      map(i => {
        if (i <= 0) {
          throw new Error('0 not allowed. And complete will not be called!!!');
        }
        return i;
      }),
      take(4)
    )
    .subscribe(
      value => this.log.push(`... result output stream: ${value}`),
      error => this.log.push(`... error output stream: ${error}`),
      () => this.log.push(`... output stream: complete`),
    )
  }

  ngOnDestroy(): void {
    this.subFrom.unsubscribe();
  }

}
