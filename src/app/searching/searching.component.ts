import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import { CommonService } from '../common.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})
export class SearchingComponent implements OnInit {
  min:any;
  max:any;
  filte:any=[];
  search:any=[];
  
  constructor(public cs:CommonService,private route : ActivatedRoute, private http: HttpClient, private router:Router) {
    this.route.queryParams.subscribe((queryparams: any) => {
    
      let apiUrl = `https://apifromashu.herokuapp.com/api/searchcakes?q=`;
      this.http.get(apiUrl+queryparams.q).subscribe((response:any)=>{
        console.log("this is response"+response);
        this.search = response.data;
        this.filte= this.search;
        if(!this.search.length){
          alert("there is no such cake");
        }
        console.log(this.search);
        this.filte=[...response.data];
        // this.route.navigate(['/navsearch'], {queryParams:{q:this.searchkey}})
    
      }, (error)=>{
        console.log("this is response"+error);
      })
  
      // console.log('results', this.search);
    });

  
  }
 
  fil(){
    console.log(this.min , this.max);
    if(this.min||this.max){
      this.filte= this.search.filter((e:any)=>
        (this.min ? Number(e.price) >= this.min :true)&& 
        (this.max ? Number(e.price) <= this.max :true)
        );
        // this.filte=[...this.filte];
        console.log(this.filte); 
           }
           
   }
ngOnInit(): void {
}



 
         





sendID(i:any) {
  console.log("hi");
  this.router.navigate(['/cakedetails', this.search[i].cakeid]);
  
}
}



