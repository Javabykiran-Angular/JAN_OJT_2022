import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  strData:string="Str Data Send from child..";

   @Output() ChildStrEvent=new EventEmitter();

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

  @Output() ChildArrObjEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSend(){
    this.ChildStrEvent.emit(this.strData);

    this.ChildArrObjEvent.emit(this.arrProduct);
  }

}
