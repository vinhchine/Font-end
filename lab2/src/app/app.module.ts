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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ContentComponent,
    ProductComponent,
    ProductDetailComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
