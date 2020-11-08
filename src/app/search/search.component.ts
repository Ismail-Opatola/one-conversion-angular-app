import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  paramQuery = {
    queryCountry: ``,
    queryTag: ``,
    queryTrending: 5
  };

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(data => {
      this.paramQuery = {
        queryCountry: data.country,
        queryTag: data.tag,
        queryTrending: data.trending
      };
    });
   }

  ngOnInit(): void {
  }

}
