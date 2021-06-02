import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from '../common.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css']
})
export class CakedetailsComponent implements OnInit {
  detail: any = {};   // Store details of cake
  constructor(private route:ActivatedRoute, private http: HttpClient, private cs:CommonService, private toast:ToastrService, private router :Router) {
    //Get details of each cake
  this.route.data.subscribe((response:any)=>{
    console.log("response of cake details", response);
      this.detail=response[0].data;
      console.log(this.detail);
    },
    (error) => {
          console.log('response' + error);
        }
      );
  }
  ngOnInit(): void {
  }

  // Item added in cart
cart(){
  if (!localStorage.getItem('user')) {
    // If user is not login
    this.toast.error('Please login');
    this.router.navigate(['/login']);
  }
  else {
    //If user is login
  const cartCake = {  
    cakeid: this.detail.cakeid,
    name: this.detail.name,
    image: this.detail.image,
    weight: this.detail.weight,
    price: this.detail.price,
  };    // cart cake object

  
  let apiUrl = `https://apifromashu.herokuapp.com/api/addcaketocart`;
  this.http.post(apiUrl, cartCake).subscribe(
    (response: any) => {
      this.toast.success(`${this.detail.name} is Succesfully Cart`);
      console.log('add cake to cart', response);
    },
    (error) => {
      console.log('this is response' + error);
    }
  );
  }
}
}