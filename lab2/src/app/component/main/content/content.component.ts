import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './product/list-product';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  products = PRODUCTS;
  constructor() { }

  ngOnInit() {
  }

}
