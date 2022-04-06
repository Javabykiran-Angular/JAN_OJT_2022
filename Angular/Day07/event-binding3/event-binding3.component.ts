import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding3',
  templateUrl: './event-binding3.component.html',
  styleUrls: ['./event-binding3.component.css']
})
export class EventBinding3Component implements OnInit {

  count:number=0;
  result:number=0;
  name:string='';
  constructor() { }

  ngOnInit() {
  }

  onKeyUp(){

    console.log("Key Up Event Occur...")
  }

  onKeyDown(){
    console.log("Key Down event Occur....")
  }

  onInput(){
    if(this.count<10){
      this.count++;
    }else{
      alert("Character limit is over..");
    }
  }

}
