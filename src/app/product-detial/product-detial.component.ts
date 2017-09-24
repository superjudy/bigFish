import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product, ProductService, comment } from '../share/product.service';

@Component({
  selector: 'product-detial',
  templateUrl: './product-detial.component.html',
  styleUrls: ['./product-detial.component.scss']
})
export class ProductDetialComponent implements OnInit {

  product:product;
  comments:comment[];

  constructor(
    private routeInfo:ActivatedRoute,
    private productService:ProductService
  ) { }

  ngOnInit() {
    let productId:number = this.routeInfo.snapshot.params["productId"];
    this.product = this.productService.getProduct( productId );
    this.comments = this.productService.getCommentForProductId( productId );
  }

}
