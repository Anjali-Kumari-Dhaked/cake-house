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
  cake:any;
  cakeids: any;
  detail: any = {};
  user:any;
  file:any;
  cartdetail:any={};
  constructor(private route:ActivatedRoute, private http: HttpClient, private cs:CommonService, private toast:ToastrService, private router :Router) {
    this.cakeids = this.route.snapshot.params['cakeid'];
    console.log(this.cakeids);
   
    let apiUrl = `https://apifromashu.herokuapp.com/api/cake/`;
    this.http.get(apiUrl + this.cakeids).subscribe(
      (response: any) => {
        console.log('this is response', response);
        this.detail = response.data;
        console.log(this.detail)

       
      },
      (error) => {
        console.log('this is response' + error);
      }
    );
  }
  
  ngOnInit(): void {
  }
cart(){
  if (!localStorage.getItem('user')) {
    this.toast.error('Please login');
    this.router.navigate(['/login']);
  }
  else {
   


  // cart cake object
  const cartCake = {
    cakeid: this.detail.cakeid,
    name: this.detail.name,
    image: this.detail.image,
    weight: this.detail.weight,
    price: this.detail.price,
  };

  // api url
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


upload(event: any) {

  console.log(this.file)
  if (event.target.files.length == 0) {
    console.log('No file selected!');
    return;
  }

 
  // get user form local storage
  // this.user = localStorage.getItem('user');
  // let u = JSON.parse(this.user);
  // console.log(u.token);

  // create header and set token to header
  // let myHeader = new HttpHeaders();
  // myHeader = myHeader.set('authtoken', u.token);
  // console.log('My Header token ==>', myHeader);

  // get image file and append it to form data
  let file: File = event.target.files[0];
  var fd = new FormData();
  fd.append('file', file);
  console.log('image file ==>', file);

  let apiUrl = `https://apifromashu.herokuapp.com/api/upload`;
  // myHeader = myHeader.set('authtoken',localStorage.token);
  this.http.post(apiUrl, fd).subscribe(
    (response: any) => {
      console.log('upload image response', response);
      // this.cakedetails = response.data

      // this.route.navigate(['/navsearch'], {queryParams:{q:this.searchkey}})
    },
    (error) => {
      console.log('this is error response' + error);
    }
  );
}
}