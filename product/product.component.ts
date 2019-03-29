import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './list-product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product = PRODUCTS;
  constructor() { }

  ngOnInit() {
  }

}
