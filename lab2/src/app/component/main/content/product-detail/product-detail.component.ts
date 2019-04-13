import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/product';
import {ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  detailProduct: Product ;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductDetail(id).subscribe(detailProduct => this.detailProduct = detailProduct);
  }
  save() {
    this.productService.editProduct(this.detailProduct).subscribe(() => {
      this.router.navigateByUrl('/product');
    });
  }
}
