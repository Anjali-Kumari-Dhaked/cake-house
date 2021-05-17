import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  card: any=[];
  constructor(public cs: CommonService, private router:Router, private http:HttpClient) {
    let apiUrl = "https://apifromashu.herokuapp.com/api/allcakes";
    this.http.get(apiUrl).subscribe((response:any)=>{
       console.log(response.data[0], "this is response");
       this.card = response.data
    }, (error)=>{
      console.log("this is response"+error);
    })
    }

  ngOnInit(): void {
    

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
  


