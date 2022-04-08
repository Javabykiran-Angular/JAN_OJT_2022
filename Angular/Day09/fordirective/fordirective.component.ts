import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

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
  isreadonly:boolean=false;
  selected:string='';
  constructor() { }

  ngOnInit() {
  }

  onKeyDown(character){
    let temp:string=character.value;
    if(temp.length<=5){

    }else{
      character.style.background='red';
      character.style.color='white'
      this.isreadonly=true;
      alert("U over the limit of character")
    }

  }

  onMouseOver(item){
    console.log('Mouse Over Event Occur...')    
    this.selected=item.productName;
  }
  onMouseOut(){
    this.selected='';
  }



}
