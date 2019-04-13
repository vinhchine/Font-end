import { Injectable } from '@angular/core';
import {Product } from 'src/app/component/main/content/product/product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Cate } from 'src/app/category/Cate';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlAPI = 'http://5ca5efc33a08260014278cdf.mockapi.io/product';
  private newurlAPI = 'http://5ca5efc33a08260014278cdf.mockapi.io/category';
  constructor( private http: HttpClient) { }
  product: Product[];
  listProduct(id): Observable <Product[]> {
    return this.http.get<Product[]>(`${this.newurlAPI}/${id}/product`);
  }
  // tslint:disable-next-line:no-shadowed-variable
  addProduct(product): Observable <Product> {
    // const newProduct = {productID: this.data.length + 1, ...Product }
    // this.data.push(newProduct) ;
    // console.log(this.data);
    return this.http.post<Product>(this.urlAPI, product);
  }
  getProductDetail(id: number) {
      const detaileditUrlAPI = `${this.urlAPI}/${id}`;
      // tslint:disable-next-line:whitespace
      return this.http.get< Product> (detaileditUrlAPI );
      }

  deleteProduct(id): Observable<Product> {
    return this.http.delete<Product>(`${this.urlAPI}/${id}`);
  }
  editProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.urlAPI}/${product.id}`, product) ;
  }
  getCategory(): Observable<Cate[]> {
    return this.http.get<Cate[]>( `${this.newurlAPI}`);
  }
    }

