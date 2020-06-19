import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { of, from, Subscription, fromEvent, Observable, interval } from 'rxjs';

@Component({
  selector: 'app-my-creation-function',
  templateUrl: './my-creation-function.component.html',
  styleUrls: ['./my-creation-function.component.css']
})
export class MyCreationFunctionComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('b', {static: false}) myButton: ElementRef;

  log: string[] = [];

  subOf: Subscription;
  subFrom: Subscription;
  subInterval: Subscription;
  subMyButtonClick: Subscription;

  ofItems$ = of('a', 'b', 'c');
  fromArray$ = from(['a', 'b', 'c']);
  interval$ = interval(1000);
  myButtonClick$;

  constructor() { }

  ngOnInit() {
    this.subOf = this.ofItems$.subscribe(
      value => this.log.push(`of next ${value}`),
      error => this.log.push(`of error ${error}`),
      () => this.log.push(`of complete`),
    );
    this.subFrom = this.fromArray$.subscribe(
      value => this.log.push(`from next ${value}`),
      error => this.log.push(`from error ${error}`),
      () => this.log.push(`from complete`),
    );
    this.subInterval = this.interval$.subscribe(
      value => this.log.push(`interval(1000) next ${value}`),
      error => this.log.push(`interval(1000) error ${error}`),
      () => this.log.push(`interval(1000) complete`),
    );
  }

  ngAfterViewInit(): void {
    this.myButtonClick$ = fromEvent(this.myButton.nativeElement, 'click');
    this.subMyButtonClick = this.myButtonClick$.subscribe(
      value => this.log.push(`fromEvent next clicked ${value.x}, ${value.y}`),
      error => this.log.push(`fromEvent error ${error}`),
      () => this.log.push(`fromEvent complete`),
    );
  }

  ngOnDestroy(): void {
    this.subOf.unsubscribe();
    this.subFrom.unsubscribe();
    this.subInterval.unsubscribe();
    this.subMyButtonClick.unsubscribe();
  }

}
