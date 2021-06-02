import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  checkoutDetails:any = {}; //Storing all details of checkout
  constructor(private cs:CommonService,private http:HttpClient, private router:Router, private toastr: ToastrService) {
    this.cs.address=true;
    this.cs.summary=true;
    this.cs.order();
    this.checkoutDetails=this.cs.checkoutDetails;
   }

  ngOnInit(): void {
  }

//Function for confirming order
confirm(){
if(!this.checkoutDetails.name || !this.checkoutDetails.address||!this.checkoutDetails.phone || !this.checkoutDetails.pincode || ! this.checkoutDetails.city){
  this.toastr.warning("All Fields are required");
}
else{
  this.router.navigate(['/checkout/orderconfirm']);
  this.cs.orderconfirm=true;
  this.cs.address=true;
    }
 }
}



  
