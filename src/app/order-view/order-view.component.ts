import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {

  paramQuery = {};

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data => {
      this.paramQuery[0] = data.id;

      if (data.id2) {
        this.paramQuery[1] = data.id2;
      }
    });
   }

  ngOnInit(): void {
  }

}
