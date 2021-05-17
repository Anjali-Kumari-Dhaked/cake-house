import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup:any = {};

  constructor(private http:HttpClient, private router:Router) {

   }

  ngOnInit(): void {
  }

  validateSignup() {

    console.log(this.signup)
    if(!this.signup.name || !this.signup.email || !this.signup.password) return

    let apiUrl = "https://apibyashu.herokuapp.com/api/register";
    this.http.post(apiUrl, this.signup).subscribe((response)=>{
      console.log(response)
      this.router.navigate(['/']);
    }, (error
    )=>{
      console.log(console.error());

    })
  }

}
