import { Component, OnInit } from '@angular/core';
import { Product } from '../main/content/product/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  constructor( private productService: ProductService) { }

  ngOnInit() {
  }
  addProduct() {
    this.productService.addProduct(this.product);
  }
}
