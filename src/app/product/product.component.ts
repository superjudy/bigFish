import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private products:Array<product>;

  constructor() { }

  ngOnInit() {
    this.products=[
    new product(1,"./assets/img/4.png","第1个商品",1.99,3.6,"这是什么鬼子商品啊，我就是来玩的1",["百里屠苏1"]),
    new product(2,"./assets/img/5.png","第2个商品",1.99,4.2,"这是什么鬼子商品啊，我就是来玩的2",["百里屠苏2"]),
    new product(3,"./assets/img/6.png","第3个商品",1.99,2.6,"这是什么鬼子商品啊，我就是来玩的3",["百里屠苏3"]),
    new product(4,"./assets/img/7.png","第4个商品",1.99,1.4,"这是什么鬼子商品啊，我就是来玩的4",["百里屠苏4"]),
    new product(5,"./assets/img/8.png","第5个商品",1.99,3.6,"这是什么鬼子商品啊，我就是来玩的5",["百里屠苏5"]),
    new product(6,"./assets/img/9.png","第6个商品",1.99,5.0,"这是什么鬼子商品啊，我就是来玩的6",["百里屠苏6"]),

    ]
  }
}

export class product{
  constructor(
    public id:number,
    public img:string,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}