import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

   private products: product[]=[
    new product(1,"./assets/img/4.png","第1个商品",1.99,3.6,"这是什么鬼子商品啊，我就是来玩的1",["百里屠苏1"]),
    new product(2,"./assets/img/5.png","第2个商品",1.99,4.2,"这是什么鬼子商品啊，我就是来玩的2",["百里屠苏2"]),
    new product(3,"./assets/img/6.png","第3个商品",1.99,2.6,"这是什么鬼子商品啊，我就是来玩的3",["百里屠苏3"]),
    new product(4,"./assets/img/7.png","第4个商品",1.99,1.4,"这是什么鬼子商品啊，我就是来玩的4",["百里屠苏4"]),
    new product(5,"./assets/img/8.png","第5个商品",1.99,3.6,"这是什么鬼子商品啊，我就是来玩的5",["百里屠苏5"]),
    new product(6,"./assets/img/9.png","第6个商品",1.99,5.0,"这是什么鬼子商品啊，我就是来玩的6",["百里屠苏6"]),
    ];

    private comments: comment[]=[
      new comment(1,1,"2017-09-24","张三三1",3.6,"这东西好啊，特别的好啊，赶紧买啊1"),
      new comment(2,1,"2017-09-24","张三三2",4,"这东西好啊，特别的好啊，赶紧买啊2"),
      new comment(3,1,"2017-09-24","张三三3",4.6,"这东西好啊，特别的好啊，赶紧买啊3"),
      new comment(4,3,"2017-09-24","张三三4",3.3,"这东西好啊，特别的好啊，赶紧买啊4"),
      new comment(5,3,"2017-09-24","张三三5",4.6,"这东西好啊，特别的好啊，赶紧买啊5"),
    ];

  constructor() { }

  getProducts():product[]{
    return this.products;
  }

  getProduct( id:number ):product{
    return this.products.find( (product) => product.id == id );
  }

  getCommentForProductId( id:number ):comment[]{
    return this.comments.filter( (comment:comment) => comment.productId == id );
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

export class comment{
  constructor(
    public id:number,
    public productId:number,
    public timestap:string,
    public user:string,
    public rating:number,
    public contant:string
  ){

  }
}