import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  checkLogin: any=true;
  searchCake: any;
  adminEmail:any;
  searchData:any;
 
  constructor(private route :Router, private cs: CommonService,private toast:ToastrService) {

   }
   ngDoCheck() {
     //check admin and cart,myorders, login conditions
    this.adminEmail=localStorage.user?JSON.parse(localStorage.user).email:null;
    if(localStorage.user) this.checkLogin = false;
    if(!localStorage.user) this.checkLogin = true;
    
  }
  ngOnInit(): void {
  }

  //Logout user
  logout() {
    localStorage.removeItem("user");
  }

  // search cakes
  search(){
   this.searchData= this.searchCake.trim().toLowerCase();
    this.searchData=this.searchData.replace(/\s\s+/g, ' ');
    if(this.searchData) {
    this.route.navigate(['/searching'],{queryParams:{q:this.searchData}});
  }}

  //check if user is login or not ...if not then navigate login page
  cart(){
   
    if (!localStorage.getItem('user')) {
      this.toast.info('Please login First');
      this.route.navigate(['/login']);
    }
  }
}
