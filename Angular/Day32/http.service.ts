import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // private BaseUrl:string="http://localhost:8080/api/";
  private BaseUrl:string=environment.baseUrl;
 

  constructor(private http:HttpClient) { }

  loginCheck(obj){
   return (this.http.post(`${this.BaseUrl}logincheck`,obj));
  }

  getAllEMP(){
    return  (this.http.get(`${this.BaseUrl}getallemployee`));
  }

  getParticularEMP(id){
    return (this.http.get(`${this.BaseUrl}getemployeebyid/${id}`));
  }

  getAllCountry(){
   return (this.http.get(`${this.BaseUrl}getallcountry`));
  }

  AddEmployee(obj){
    return (this.http.post(`${this.BaseUrl}addemployee`,obj,{responseType:'text'}));
  }

  UpdateEmployee(obj){
    return (this.http.put(`${this.BaseUrl}updateemployee`,obj,{responseType:'text'}));
  }

  DeleteEmployee(id){
      return  (this.http.delete(`${this.BaseUrl}deleteemployee/${id}`,{responseType:'text'}));
  }

 
}
