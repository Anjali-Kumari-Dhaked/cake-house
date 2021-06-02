import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import { FORMERR } from 'node:dns';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})
export class SearchingComponent implements OnInit {
  min:any;
  max:any;
  filter:any=[]; 
  search:any=[];
  
  constructor(public cs:CommonService,private route : ActivatedRoute, private http: HttpClient, private router:Router) {
    //search cake
    this.route.queryParams.subscribe((queryparams: any) => {
    let apiUrl = `https://apifromashu.herokuapp.com/api/searchcakes?q=`;
      this.http.get(apiUrl+queryparams.q).subscribe((response:any)=>{
        console.log("this is response"+response);
        this.search = response.data;
        this.filter=this.search;
        

        if(!this.search.length){
          document.querySelector('.not-found')?.classList.remove('hidden');
        }
        console.log(this.search);
        this.filter=[...response.data];
     }, (error)=>{
        console.log("this is response"+error);
      })
    });
  }
 
  // filter cake
  fil(){
    console.log(this.min , this.max);
    if(this.min||this.max){
      this.filter= this.search.filter((e:any)=>
        (this.min ? Number(e.price) >= this.min :true)&& 
        (this.max ? Number(e.price) <= this.max :true)
        );
    }  
  }

  //sort cake by price
  eitherSort(filter:any=[]){
    const sorter = (a:any, b:any) => {
       return +a.price - +b.price;
    };
    this.filter.sort(sorter);
  };
  
    
ngOnInit(): void {
}

// for more cake detalis
 sendID(i:any) {
  console.log("hi");
  this.router.navigate(['/cakedetails', this.search[i].cakeid]);
  
}
}



