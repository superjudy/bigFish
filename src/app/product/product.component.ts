import { Component, OnInit } from '@angular/core';
import { product } from '../share/product.service';
import { ProductService } from "../share/product.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private products:product[];

  constructor( private productService:ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}