import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.scss']
})
export class ProductIdComponent implements OnInit {

  paramQuery = '';
  searchKeyword = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(data => {
      this.searchKeyword = this.paramQuery = data.id;
    });
  }

  ngOnInit(): void {
  }

  updateSearch = () => {
    const searchVal = this.searchKeyword;
    this.router.navigate(['products/view', searchVal]);
  }

}
