import { Component, OnInit,Input} from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input () name:any
  detail:any={};
  constructor(private check:CommonService,private router : Router, private http: HttpClient,private toastr: ToastrService) { }
  
  ngOnInit(): void {
 
  }
 
  login(){
    console.log(this.detail)
    if(!this.detail.email || !this.detail.password) return

    let apiUrl = "https://apibyashu.herokuapp.com/api/login";
    this.http.post(apiUrl, this.detail).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response));
      localStorage.setItem("token", JSON.stringify(response.token));
      this.toastr.success("Login Successfully");
      this.router.navigate(['/']);
    }, (error
    )=>{
      console.log(console.error());

    })
  }
  

}
  


