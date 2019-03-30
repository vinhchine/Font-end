import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThongbaoService {

  constructor() { }


  message() {
    alert('Hello');
  }
}
