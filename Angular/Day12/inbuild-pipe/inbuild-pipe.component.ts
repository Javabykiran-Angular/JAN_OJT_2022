import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strdetail:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolore debitis aliquam quas necessitatibus vero, cupiditate consectetur. Eligendi, soluta et vel error voluptates impedit voluptatum velit ex. Quae, temporibus quo.';

  num2:number=-452.78956324557;

  mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
