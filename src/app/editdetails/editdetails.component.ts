import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {
  edit:any={};
  
  id:any;
  file:any;
  constructor(private http:HttpClient, private route:ActivatedRoute) { 
    this.id = this.route.snapshot.params['cakeid'];
    console.log(this.id);
   
    let apiUrl = `https://apifromashu.herokuapp.com/api/cake/`;
    this.http.get(apiUrl + this.id).subscribe(
      (response: any) => {
        console.log('this is response', response);
        this.edit = response.data;

        // this.route.navigate(['/navsearch'], {queryParams:{q:this.searchkey}})
      },
      (error) => {
        console.log('this is response' + error);
      }
    );
  }

  ngOnInit(): void {
  }
 save(){
   console.log(this.edit);
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
        this.edit.image=response.imageUrl ;
        // this.cakedetails = response.data
  
        // this.route.navigate(['/navsearch'], {queryParams:{q:this.searchkey}})
      },
      (error) => {
        console.log('this is error response' + error);
      }
    );
  }
  }



