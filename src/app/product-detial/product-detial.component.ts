import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-detial',
  templateUrl: './product-detial.component.html',
  styleUrls: ['./product-detial.component.scss']
})
export class ProductDetialComponent implements OnInit {

  productTitle:string;

  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    this.productTitle = this.routeInfo.snapshot.params["prodTitle"];
  }

}
