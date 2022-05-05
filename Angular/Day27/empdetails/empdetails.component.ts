import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  empId:number;

  empobj=<Employee>{};

  constructor(private route:ActivatedRoute,
              private service:HttpService) { }

  ngOnInit() {
    this.GetAllDataFromURL();
    this.GetDataFromBackEnd();
  }
  GetAllDataFromURL(){
      this.route.paramMap
      .subscribe((param)=>{
        this.empId=+param.get("id");
        console.log(this.empId)
      })
  }

  GetDataFromBackEnd(){
      this.service.getParticularEMP(this.empId)
      .subscribe((response)=>{
        // console.log(response)
        this.empobj=(<Employee>response)
        console.log(this.empobj);
      })
  }

  OnUpdate(){

  }

}
