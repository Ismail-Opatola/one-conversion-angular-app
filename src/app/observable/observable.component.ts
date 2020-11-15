import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  orderStatus: any;
  data: Observable<any>;
  data2: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next('In Progress');
      }, 2000);
      setTimeout(() => {
        observer.next('Processing');
      }, 5000);
      setTimeout(() => {
        observer.next('Completed');
      }, 8000);
      setTimeout(() => {
        observer.error();
      }, 8000);
      setTimeout(() => {
        observer.complete();
      }, 8000);
    });

    this.data.subscribe(val => {
      this.orderStatus = val;
    });
    this.data.subscribe(val => {
      console.log('Second Subscription');
    });

    // this.data2 = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next('In Progress');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('Processing');
    //   }, 5000);
    //   setTimeout(() => {
    //     observer.next('Completed');
    //   }, 8000);
    // });
  }

}
