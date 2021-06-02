import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  email:any;
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
  }

  // For recovering password
  forgot () {
    console.log(this.email);
    let apiUrl = "https://apibyashu.herokuapp.com/api/recoverpassword";
    this.http.post(apiUrl,{email:this.email}).subscribe((response:any)=>{
      console.log("this is response",response);
      this.router.navigate(['/'])
    }, (error)=>{
      console.log("this is response"+error);
    })

  }

}
