import { Injectable } from '@angular/core';
import { PRODUCTS } from 'src/app/component/main/content/product/list-product';
import {Product } from 'src/app/component/main/content/product/product';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private data = [...PRODUCTS] ;
  constructor() { }
  listProduct() {
    return PRODUCTS;
  }
  getProducts(): Observable <Product[]> {
    // tslint:disable-next-line:no-unused-expression
    return of (PRODUCTS) ;
  }
  addProduct(product) {
    // tslint:disable-next-line:semicolon
    const newProduct = {id: this.data.length + 1, ...product }
    this.data.push(newProduct) ;
    console.log(this.data);
  }
}
