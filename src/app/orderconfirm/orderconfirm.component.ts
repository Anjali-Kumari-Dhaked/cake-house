import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-orderconfirm',
  templateUrl: './orderconfirm.component.html',
  styleUrls: ['./orderconfirm.component.css']
})
export class OrderconfirmComponent implements OnInit {
  detail:any={};
  constructor(private http: HttpClient , private route:Router) {
    let apiUrl = "https://apifromashu.herokuapp.com/api/cakeorders";
    this.http.post(apiUrl, {}).subscribe(
      (response: any) => {
        // this.toast.success(``);
        console.log('Order Confirmation', response);
        this.detail= response.cakeorders;
      
        console.log(this.detail);
        this.detail=this.detail[this.detail.length-1];
        // this.detail.forEach((ele:any) => {
        //   let date = new Date(ele.orderdate);
        //   ele.orderdate=`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        // });
      },
      (error:any) => {
        console.log('this is response' + error);
      }
    );
    }
  ngOnInit(): void {
  }
}