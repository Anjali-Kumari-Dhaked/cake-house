import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  detail:any=[];                
  constructor(private cs:CommonService, private http:HttpClient , private route:Router, private toast:ToastrService) {
    // for getting order summary
    this.cart();
  }
  cart(){
      let apiUrl = `https://apifromashu.herokuapp.com/api/cakecart`;
        this.http.post(apiUrl, {}).subscribe(
          (response: any) => {
            console.log('cart items', response);
            this.detail= response.data;
            console.log(this.detail);
            this.detail.price = response.data.reduce((acc:any, value:any) => acc + value.price,0);
          },
          (error:any) => {
            console.log('this is response' + error);
          }
        );
        }
  ngOnInit(): void {

  }
  // place order
placeorder(){
    if (!localStorage.getItem('user')) {
      this.toast.warning('Please login');
      this.route.navigate(['/login']);
    }
  else{
  this.route.navigate(['/checkout/address']);
  this.cs.address=true;
  this.cs.summary=true;
  }
}
}
