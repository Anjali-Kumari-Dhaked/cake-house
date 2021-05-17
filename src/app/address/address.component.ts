import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  checkoutDetails:any = {};
  checkoutCart:any = [];
  totalPrice:any;
  placeorder:any={};
  constructor(private cs:CommonService,private http:HttpClient, private router:Router) {
    this.cs.order();
    this.checkoutDetails=this.cs.checkoutDetails;
   
   }

  ngOnInit(): void {
  }
confirm(){
  this.router.navigate(['/checkout/orderconfirm']);
  this.cs.orderconfirm=true;
  this.cs.address=true;
}
}
// orderCake() {

//   console.log(this.checkoutDetails);
//   let apiUrl = "https://apifromashu.herokuapp.com/api/addcakeorder";
//   this.http.post(apiUrl, this.checkoutDetails).subscribe(
//     (response: any) => {

//       console.log("AddCakeOrder response",response);
      
      

//     },
//     (error:any) => {
//       console.log('this is response' + error);
//     }
//   );

// }



  
