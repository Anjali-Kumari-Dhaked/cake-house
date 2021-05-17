import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-orderconfirm',
  templateUrl: './orderconfirm.component.html',
  styleUrls: ['./orderconfirm.component.css']
})
export class OrderconfirmComponent implements OnInit {
  detail:any={};
  
  constructor(private http: HttpClient , private route:Router, private router:ActivatedRoute,private cs:CommonService, private toast: ToastrService) {
    this.cs.order();
    this.detail=this.cs.checkoutDetails;
    console.log(this.detail);
  }

 
  ngOnInit(): void {
  }
  orderCake() {
  
    console.log(this.detail);
    let apiUrl = "https://apifromashu.herokuapp.com/api/addcakeorder";
    this.http.post(apiUrl, this.detail).subscribe(
      (response: any) => {
  
        console.log("Order Confirm",response);
        this.toast.success("Order Successful");
        
        this.cs.orderconfirm=false;
        this.cs.summary=false;
        this.cs.address=false;
   this.route.navigate(["/"]);
      },
      (error:any) => {
        console.log('this is response' + error);
      }
    );
  
  }
}