import { Injectable } from '@angular/core';
import { PRODUCTS } from 'src/app/component/main/content/product/list-product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private data = [...PRODUCTS ];
  constructor() { }
  listProduct() {
    return PRODUCTS;
  }
}
