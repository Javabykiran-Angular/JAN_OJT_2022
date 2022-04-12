import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

    strData:string="Parent Data....";


    jsonobj={
      id:9,
      fname:'Sumit',
      role:'Developer + Corporate Trainer'
    }

    myname:string='';

    ChildStrData:string='';
    arrobj:any[]=[];

  constructor() { }

  ngOnInit() {
  }

  onSend(inputname){
    this.myname=inputname;
  }

  onArrObjEvent(myevent){
    this.arrobj=myevent;
  }

}
