import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-cake-card',
  templateUrl: './cake-card.component.html',
  styleUrls: ['./cake-card.component.css']
})
export class CakeCardComponent implements OnInit {
  // cakeCard = this.cs.cardCollection;
  card: any=[];
  constructor(public cs: CommonService, private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    let apiUrl = "https://apifromashu.herokuapp.com/api/allcakes";
      this.http.get(apiUrl).subscribe((response:any)=>{
         console.log(response.data[0], "this is response");
         this.card = response.data
      }, (error)=>{
        console.log("this is response"+error);
      })

  }
  sendID(i:any) {
    console.log("hi");
    this.router.navigate(['/cakedetails', this.card[i].cakeid]);
    
  }
}
