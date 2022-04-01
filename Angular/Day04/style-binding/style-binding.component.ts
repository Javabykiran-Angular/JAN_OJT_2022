import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  mycolor:string='red';
  rating:number=21;

  myjson={
    color:'blue',
    fontFamily:'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode',
    "font-size":'52px'
  }

  constructor() { }

  ngOnInit() {
  }

}
