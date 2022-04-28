import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demo-tdf',
  templateUrl: './demo-tdf.component.html',
  styleUrls: ['./demo-tdf.component.css']
})
export class DemoTDFComponent implements OnInit {



  country:any[]=[
    {cid:1,name:'India'},
    {cid:2,name:'US'},
    {cid:3,name:'Japan'}
  ];




  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";



  constructor() { }

  ngOnInit() {
  }

  onSubmit(f:NgForm){
    console.log("Username "+f.value.myusername);
    console.log("Radio button "+f.value.con);


    let obj={
      name:f.value.myusername,
      contact:f.value.con
    }

  }

}
