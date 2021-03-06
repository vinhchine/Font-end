import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import { ContentComponent } from './component/main/content/content.component';
import { ProductComponent } from './component/main/content/product/product.component';
import { ProductDetailComponent } from './component/main/content/product-detail/product-detail.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { CartComponent } from './component/cart/cart.component';
import { EntitiesComponent } from './component/entities/entities.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './component/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ContentComponent,
    ProductComponent,
    ProductDetailComponent,
    AddProductComponent,
    DashboardComponent,
    // CartComponent,
    EntitiesComponent,
    NotfoundComponent,
    HomeComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
