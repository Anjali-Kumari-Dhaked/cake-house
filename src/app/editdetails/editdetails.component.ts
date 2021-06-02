import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {
  edit:any={}; //storing details of input 
  id:any;  // storing cakeid
  file:any;
  constructor(private http:HttpClient, private route:ActivatedRoute) { 
    // Get cakeid
    this.id = this.route.snapshot.params['cakeid'];
    console.log(this.id);

   //get details of specific cake with cakeid
    let apiUrl = `https://apifromashu.herokuapp.com/api/cake/`;
    this.http.get(apiUrl + this.id).subscribe(
      (response: any) => {
        console.log('this is response', response);
        this.edit = response.data;
      },
      (error) => {
        console.log('this is response' + error);
      }
    );
  }

  ngOnInit(): void {
  }

  //upload image
  upload(event: any) {
     console.log(this.file)
    if (event.target.files.length == 0) {
      console.log('No file selected!');
      return;
    }
   // get image file and append it to form data
    let file: File = event.target.files[0];
    var fd = new FormData();
    fd.append('file', file);
    console.log('image file ==>', file);
   let apiUrl = `https://apifromashu.herokuapp.com/api/upload`;
  this.http.post(apiUrl, fd).subscribe(
      (response: any) => {
        console.log('upload image response', response);
        this.edit.image=response.imageUrl ;
      },
      (error) => {
        console.log('this is error response' + error);
      }
    );
  }
  save(){
    console.log(this.edit);
  }
  }



