import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cake House';
 
  constructor(private http:HttpClient){
    this.http.get("https://apifromashu.herokuapp.com/api/getuserdetails").subscribe((res:any)=>{
      console.log(res);
    },
    (error:any)=>{
      if(error.ok === false){
        localStorage.clear();
      console.log(error);
    
      }});
}}