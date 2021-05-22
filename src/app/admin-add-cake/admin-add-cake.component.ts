import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-add-cake',
  templateUrl: './admin-add-cake.component.html',
  styleUrls: ['./admin-add-cake.component.css']
})
export class AdminAddCakeComponent implements OnInit {
add:any={};

file:any;
  constructor(private http:HttpClient, private route:ActivatedRoute, private toast:ToastrService) { 
   
    console.log(this.add);
  }

  ngOnInit(): void {
  }

  





  // save(){
  //   // this.add.ingredients.split(" , ");
   
  // }
 
 addCake(){
  
  if(!this.add.name|| !this.add.price || !this.add.ingredients||!this.add.weight|| !this.add.categories|| ! this.add.description||! this.add.image|| !this.add.eggless){
    this.toast.warning("All fields are required");
  }
  




  else{
    this.add.ingredients=this.add.ingredients.split(',');
  console.log("Enter data is",this.add);
  let apiUrl = "https://apifromashu.herokuapp.com/api/addcake";
  this.http.post(apiUrl, this.add).subscribe(
    (response: any) => {

      console.log("Add cake",response);
     
      
 
    },
    (error:any) => {
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
         this.add.image=response.imageUrl ;
         // this.cakedetails = response.data
   
         // this.route.navigate(['/navsearch'], {queryParams:{q:this.searchkey}})
       },
       (error) => {
         console.log('this is error response' + error);
       }
     );
   }
}
