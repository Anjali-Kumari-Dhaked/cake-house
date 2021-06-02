import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CanComponentDeactivate } from '../can-deactivate-guard.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements CanComponentDeactivate {
  p:number=1;   //Intial value for pagination
  totalLength:any;  //Toal length of items for pagination
  card: any=[];   //Storing all cakes of data
  constructor(public cs: CommonService, private router:Router, private http:HttpClient,private spinner: NgxSpinnerService) {
    this.spinner.show();
    //Get the data of all cakes
    let apiUrl = "https://apifromashu.herokuapp.com/api/allcakes";
    this.http.get(apiUrl).subscribe((response:any)=>{
       console.log(response.data[0], "this is response");
       if(response){
        this.spinner.hide();
       }
       this.card = response.data;
      this.totalLength=response.length;
       console.log(this.totalLength);
    }, (error)=>{
      console.log("this is response"+error);
    })
    }

  ngOnInit(): void {
  
}
canDeactivate(){
  return window.confirm("Do You really want changes?");
}

sendID(i:any) {
  console.log(i);
  this.router.navigate(['/admin/editdetails', i]);
  
}
 }



