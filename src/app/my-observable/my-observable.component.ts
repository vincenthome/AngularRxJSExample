import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-my-observable',
  templateUrl: './my-observable.component.html',
  styleUrls: ['./my-observable.component.css']
})
export class MyObservableComponent implements OnInit, OnDestroy {

  log: string[] = [];

  sub: Subscription;
  subV2: Subscription;

  rawObservable$ = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  });

  rawObservableV2$ = new Observable(observer => {
    observer.next('a');
    observer.next('b');
    observer.next('c');
    observer.complete();
  });

  constructor() { }

  ngOnInit() {
    this.processRawObservable();
    this.processRawObservableV2();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.subV2.unsubscribe();
  }

  processRawObservable() {
    // Subscribe with Observer Object
    const observer = {
      next: value => this.log.push(`Observer Object next: ${value}`),
      error: err => this.log.push(`Observer Object error: ${err}`),
      complete: () => this.log.push(`Observer Object complete`)
    };
    this.sub = this.rawObservable$.subscribe(observer);
  }

  processRawObservableV2() {
    // Subscribe with direct callbacks
    this.subV2 = this.rawObservableV2$.subscribe(
      value => this.log.push(`Direct Callback next: ${value}`),
      error => this.log.push(`Direct Callback error: ${error}`),
      () => this.log.push(`Direct Callback complete`)
    );
  }

}
