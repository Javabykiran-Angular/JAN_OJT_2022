import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-query-parameter',
  templateUrl: './query-parameter.component.html',
  styleUrls: ['./query-parameter.component.css']
})
export class QueryParameterComponent implements OnInit {

  myjson={
    id:0,
    myfname:'',
    role:''
  }
  NotifyData:string='';

  constructor(private route:ActivatedRoute,
            private myNotification:NotificationService) { }

  ngOnInit() {
    this.GetDataFromURL();
    this.GetNotificationData();
  }

GetNotificationData(){
  this.myNotification.notification
  .subscribe((data)=>{
    this.NotifyData=data;
  })
}

  GetDataFromURL(){
      this.route.queryParamMap
      .subscribe((param)=>{
        this.myjson.id=+param.get("id");
        this.myjson.myfname=param.get('fname');
        this.myjson.role=param.get('role')
      })
  }

  onSend(myname:string){
    this.myNotification.SendMessage(myname)
  }

}
