import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-add-cake',
  templateUrl: './admin-add-cake.component.html',
  styleUrls: ['./admin-add-cake.component.css']
})
export class AdminAddCakeComponent implements OnInit {
add:any={};  //Store the details of cake which we want to add
file:any;
  constructor(private http:HttpClient, private route:ActivatedRoute, private toast:ToastrService,private router: Router) { 
   console.log(this.add);
  }

  ngOnInit(): void {
  }
 
  // Add cake which we want to add
 addCake(){
   //check all fields should be compulsary
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
       this.toast.success("Add cake successfully");
       this.router.navigate(["/"]);
     },
    (error:any) => {
      console.log('this is response' + error);
    }
  );
  }
}

//For uploading image
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
         this.add.image=response.imageUrl ;
       },
       (error) => {
         console.log('this is error response' + error);
       }
     );
   }
}
