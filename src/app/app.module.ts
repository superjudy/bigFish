import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetialComponent } from './product-detial/product-detial.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from "./share/product.service";

const routeConfig:Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"product/:productId",
    component:ProductDetialComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    FooterComponent,
    StarsComponent,
    ProductDetialComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
