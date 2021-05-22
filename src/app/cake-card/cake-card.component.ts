import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { CommonService } from '../common.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxSpinnerService } from 'ngx-spinner';
import { privateDecrypt } from 'crypto';
@Component({
  selector: 'app-cake-card',
  templateUrl: './cake-card.component.html',
  styleUrls: ['./cake-card.component.css']
})
export class CakeCardComponent implements OnInit {
  p:number=1;
  totalLength:any;
  card: any=[];
 
  constructor(public cs: CommonService, private router:Router, private http:HttpClient) { 
    let apiUrl = "https://apifromashu.herokuapp.com/api/allcakes";
    this.http.get(apiUrl).subscribe((response:any)=>{
      console.log(response.data[0], "this is response");
       this.card = response.data;
       this.totalLength=response.length;
       console.log(this.totalLength);
    }, (error)=>{
      console.log("this is response"+error);
    });
    
}

  ngOnInit(): void {

}

  sendID(i:any) {
    console.log("hi");
    this.router.navigate(['/cakedetails', this.card[i].cakeid]);
    
  }
}