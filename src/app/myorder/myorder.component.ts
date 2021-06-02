import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {
 detail:any=[];
  constructor(private http: HttpClient , private route:Router) {
    //Showing all orders
    let apiUrl = "https://apifromashu.herokuapp.com/api/cakeorders";
    this.http.post(apiUrl, {}).subscribe(
      (response: any) => {
        console.log('Myorder', response);
        this.detail= response.cakeorders;
        console.log(this.detail);
        this.detail.forEach((ele:any) => {
          let date = new Date(ele.orderdate);
          ele.orderdate=`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        });
      },
      (error:any) => {
        console.log('this is response' + error);
      }
    );
  }
   

  ngOnInit(): void {
  }

  //showing details of order
showdetails(id:any){
   document.querySelector(`#cake${id}`)?.classList.toggle("hidden");
   
}
}
