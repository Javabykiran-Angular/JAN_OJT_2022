import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {

  arrProduct=[
    {
      productName:'Samsung',
      price:25000,
      quantity:1
    },
    {
      productName:'Motorola',
      price:35000,
      quantity:1
    },
    {
      productName:'Realme',
      price:15000,
      quantity:1
    },
    {
      productName:'OnePlus',
      price:45000,
      quantity:1
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
