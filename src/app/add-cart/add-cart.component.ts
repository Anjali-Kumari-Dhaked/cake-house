import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
 detail:any=[];   //Store cart items             
constructor(private cs:CommonService, private http:HttpClient , private route:Router,private router:ActivatedRoute) {
  // Shows the cart items
  router.data.subscribe((response)=>{
    this.detail=response[0].data;
  })
}
// For remove the cart item
remove(i:any){
    console.log(i);
    var apiUrl= "https://apifromashu.herokuapp.com/api/removecakefromcart";
  
    this.http.post(apiUrl,{cakeid:this.detail[i].cakeid}).subscribe((response:any)=>{
      console.log("remove cart", response);
      if(response.message="Remove item from cart"){
        this.cart();
      }
    });
  (error:any)=>{
    console.log('response'+error);
  }
}

//Showing the cart items after deletation
cart(){
  let apiUrl = `https://apifromashu.herokuapp.com/api/cakecart`;
    this.http.post(apiUrl, {}).subscribe(
      (response: any) => {
       this.detail= response.data;
      },
      (error) => {
        console.log('this is response' + error);
      }
    );
  }

  ngOnInit(): void {
  }
}

