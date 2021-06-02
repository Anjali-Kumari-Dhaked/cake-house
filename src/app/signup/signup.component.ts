import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup:any = {};

  constructor(private http:HttpClient, private router:Router,private toaster: ToastrService,private check:CommonService) {}

  ngOnInit(): void {
  }

  
  validateSignup() {
    // validate sign up
    console.log(this.signup)
    if(!this.signup.name || !this.signup.email || !this.signup.password){
      this.toaster.warning("All Fields are required");}
      else if( !this.check.validate(this.signup.email)){
     this.toaster.warning("Please enter your email correctly");
    }
else{
  // creating new account
    let apiUrl = "https://apibyashu.herokuapp.com/api/register";
    this.http.post(apiUrl, this.signup).subscribe((response)=>{
      console.log(response);
      alert("User registered successfully");
      this.router.navigate(['/']);
    }, (error
    )=>{
      console.log(console.error());

    })}
  }

}
