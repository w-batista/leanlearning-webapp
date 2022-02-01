import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  valor1: number = 0;
  valor2: number = 0;
  total: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  calcular(){
    this.total = this.valor1 * this.valor2;
  }

}
