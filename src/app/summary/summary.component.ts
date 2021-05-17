import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  detail:any=[];                
  constructor(private cs:CommonService, private http:HttpClient , private route:Router) {
    this.cart();
  }
  cart(){
      let apiUrl = `https://apifromashu.herokuapp.com/api/cakecart`;
        this.http.post(apiUrl, {}).subscribe(
          (response: any) => {
            // this.toast.success(``);
            console.log('cart items', response);
            this.detail= response.data;
            console.log(this.detail);
          },
          (error:any) => {
            console.log('this is response' + error);
          }
        );
        }
  

  ngOnInit(): void {

  }
placeorder(){
  
  this.route.navigate(['/checkout/address']);
  this.cs.address=true;
  this.cs.summary=true;
  
}
}
