import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutDetails:any = {};
  checkoutCart:any = [];
  totalPrice:any;
  placeorder:any={};
  constructor(public cs:CommonService,private http:HttpClient , private router:Router) {
    // this.order();
   
   }

  ngOnInit(): void {
  }
//  order(){
//   let apiUrl = `https://apifromashu.herokuapp.com/api/cakecart`;
//   this.http.post(apiUrl, {}).subscribe(
//     (response: any) => {
//       // this.intercept.navigationInterceptor(response)
//       // this.checkoutCart = response.data;
//       this.checkoutDetails['cakes'] = response.data
//       this.checkoutDetails.price = response.data.reduce((acc:any, value:any) => acc + value.price,0);
//       console.log(this.checkoutDetails);

//     },
//     (error:any) => {
//       console.log('this is response' + error);
//     }
//   );
// }

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








  //  var apiUrl = "https://apifromashu.herokuapp.com/api/cakecart";
  //  this.http.post(apiUrl, {}).subscribe((response:any)=>{
  //    console.log("item", response);
  //    this.persondetail['data']=response.data;
  //    console.log(this.persondetail);
     
  //  },
  //  (error)=>{
  //    console.log(error);
  //  })
   
  //  let dataa={de, cakes:this.persondetail};
  //  console.log(dataa);
 }

