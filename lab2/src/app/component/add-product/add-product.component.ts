import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../main/content/product/product';
import { ProductService } from 'src/app/services/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  @Input() dataProduct;
  constructor( private productService: ProductService) { }

  ngOnInit() {
  }
  addProduct() {
    this.productService.addProduct(this.product).subscribe(data => {
      this.dataProduct.push(data);
    });
    this.product = null;
  }
  onSubmit(formAdd: NgForm) {
    if (formAdd.valid) {
      this.productService.addProduct(formAdd.value).subscribe(data => {
      });
    } else {
      console.log('Failed');

    }
  }
}
