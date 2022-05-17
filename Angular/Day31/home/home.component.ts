import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { Employee } from '../model/employee';
import { DialogService } from '../dialog.service';
import { ToastrService  } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  EmpData:any[]=[];
  empobj=<Employee>{};
  radioCheck:boolean=false;
  p:number=1;
  nameSearch:string='';

  modalRef: BsModalRef;  
  config = {
    animated: true,    
    ignoreBackdropClick: true,
    class: "alert alert-danger"
  };

  constructor(private service:HttpService,
              private modalservice:BsModalService,
              private dialogservice:DialogService,
              private toaster:ToastrService) { }

  ngOnInit() {
    this.GetAllRecord();
  }

  GetAllRecord(){
      this.service.getAllEMP()
      .subscribe((response)=>{
        // console.log(response);
        this.EmpData=(<any>response);
        // console.log(this.EmpData)
      })

     
  }

  OnRadioClick(item){
    console.log(item);
    this.radioCheck=true;
    this.empobj=item;
  }


  onUpdate(popUp:TemplateRef<any>){
    if(this.isRadioCheck()){
      //logic here
       this.modalRef= this.modalservice.show(popUp,this.config);

    }else{
      alert('Please select A Record to Update...');
    }
  }

  isRadioCheck(){
    if(this.radioCheck)
    return true;
    else
    return false;
  }

  onDelete(){
    if(this.isRadioCheck()){
      //write code here

      this.dialogservice.OpenConfirmDialog('Do you want delete this Record?')
      .afterClosed()
      .subscribe((res)=>{
          console.log(res);
          if(res){
            //Delete record
            this.service.DeleteEmployee(this.empobj.id)
            .subscribe((response)=>{
              console.log(response)
              this.toaster.success(response,'Delete Notification');
              this.GetAllRecord();

            })
          }
      })

    }else{
      alert('Please select Employee to Delete');
    }
  }



}
