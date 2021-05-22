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
 detail:any=[];                
constructor(private cs:CommonService, private http:HttpClient , private route:Router,private router:ActivatedRoute) {
  // this.cart();
  router.data.subscribe((response)=>{
    this.detail=response[0].data;
  })

}
cart(){
    let apiUrl = `https://apifromashu.herokuapp.com/api/cakecart`;
      this.http.post(apiUrl, {}).subscribe(
        (response: any) => {
          // this.toast.success(``);
          // console.log('cart items', response);
          this.detail= response.data;
          // console.log(this.detail);
        },
        (error) => {
          console.log('this is response' + error);
        }
      );
      }
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

  ngOnInit(): void {
  }

}

