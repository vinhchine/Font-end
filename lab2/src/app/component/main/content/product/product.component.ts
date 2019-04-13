import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[ ] ;
  // selectedProduct: Product;
  // constructor(private thongbaoService: ThongbaoService) { }
  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.getProducts();
  }
  // onSelect(item: Product) {
  //   this.selectedProduct = item;
  // }
  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(data => {
    this.products = this.products.filter(item => item.id !== data.id );
  } );
  }
  // showMessage() {
  //   this.thongbaoService.message();
  // }
  getProducts() {
    this.route.params.subscribe(param => {
      const cateId = +param.cateId;
      this.productService.listProduct(param.cateId).subscribe(data => {
        console.log(data);
        return this.products = data;
      });
    });
  }
}
