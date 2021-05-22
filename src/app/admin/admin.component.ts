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

  card: any=[];
  constructor(public cs: CommonService, private router:Router, private http:HttpClient,private spinner: NgxSpinnerService) {
    let apiUrl = "https://apifromashu.herokuapp.com/api/allcakes";
    this.http.get(apiUrl).subscribe((response:any)=>{
       console.log(response.data[0], "this is response");
       this.card = response.data
    }, (error)=>{
      console.log("this is response"+error);
    })
    }

  ngOnInit(): void {
    /** spinner starts on init */
 this.spinner.show();

 setTimeout(() => {
   /** spinner ends after 5 seconds */
   this.spinner.hide();
 }, 2000)

}
canDeactivate(){
  return window.confirm("Do You really want changes?");
}

sendID(i:any) {
  console.log(i);
  this.router.navigate(['/admin/editdetails', i]);
  
}

  }
  // sendID(i:any) {
  //   console.log("hi");
  //   this.router.navigate(['/cakedetails', this.card[i].cakeid]);
    
  // }
  


