import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../common.service';
// import { CommonService } from '../common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  num: any=true;
  searchCake: any
  
  // name = 'ashu' //property
  constructor(private route :Router, private cs: CommonService,private toast:ToastrService) {

    
    // setTimeout(()=>{
    //   this.name = "Abhishek"
    // },5000)

   }
   ngDoCheck() {
    if(localStorage.user) this.num = false;
    if(!localStorage.user) this.num = true;
  }
  ngOnInit(): void {
    // this.cs.question11='main bhi kyu btau'
    // console.log("service ka reference", this.cs.question10)
  }
  logout() {
    localStorage.removeItem("user");
  }
  search(){
    if(this.searchCake) {
    this.route.navigate(['/searching'],{queryParams:{q:this.searchCake}});
  }}
  cart(){
    if (!localStorage.getItem('user')) {
      this.toast.warning('Please login');
      this.route.navigate(['/login']);
    }
  }
}
