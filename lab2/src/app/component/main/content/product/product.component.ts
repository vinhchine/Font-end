import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './list-product';
import { Product } from './product';
import { ThongbaoService } from 'src/app/services/thongbao.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[ ] ;
  selectedProduct: Product;
  // constructor(private thongbaoService: ThongbaoService) { }
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.products = this.productService.listProduct();
  }
  onSelect(item: Product) {
    this.selectedProduct = item;
  }
  onDelete( product) {
  this.products = this.products.filter(item => item.productID !== product.productID );
  console.log(this.products);
  }
  // showMessage() {
  //   this.thongbaoService.message();
  // }
}
