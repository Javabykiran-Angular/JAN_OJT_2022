import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  PostData:any[]=[];
  id:number;
  title:string='';
  body:string='';
  isHidden:boolean=true;
  isHideUI:boolean=false;
  constructor(private service:HttpService) { }

  ngOnInit() {
    this.GetData();
  }

  GetData(){

      this.service.getPost()
      .subscribe((response)=>{
        // console.log(response)
        
        this.PostData=(<any>response);

      },(myerror)=>{
      //  alert('Error is Occured');
        console.log('===>> Status code is '+myerror.status)
        this.isHideUI=true;
        if(myerror.status>=400 || myerror.status<=499){
         // alert('Client side error')
         
        }else if(myerror.status>=500 || myerror.status<=599){
          alert('Server side error')
        }else{
          alert('UnAuthorised error ')
        }

      })

  }

  onSend(mytitle,mybody){
    let obj={
      title:mytitle,
      body:mybody
    }

    this.service.PostData(obj)
    .subscribe((response)=>{
      console.log(response);
    })


  }

  onEdit(item){
    console.log(item);
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.isHidden=false;
  }

  onUpdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }



    this.service.Updatedata(obj)
    .subscribe((response)=>{
      console.log(response)
      this.isHidden=true;
    })



  }

  onDelete(id){
    this.service.DeleteData(id)
    .subscribe((response)=>{
      console.log(response)
    })
  }

  

}
