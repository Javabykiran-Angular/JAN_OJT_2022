import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

  result:number=0;
  constructor() { }

  ngOnInit() {
  }

  onDollerEvent(myevent){
    console.log(myevent)
    console.log("========> "+myevent.target.value)
  }

  onSend(myname){
    console.log(myname);
    console.log("====>>>>> "+myname.value);
    myname.style.background='green';
    myname.style.color='white';
  }

  onSend1(myname1){
    console.log(myname1)
  }


  onAddition(num1,num2){

    let n1=+num1;
    let n2=+num2;
    
    // this.result=num1+num2;

    this.result=n1+n2;

  }

  onChange(){
    console.log('Change Event Occur...')
  }

}
