import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // question11: any=""
  // question10 = "apna karle chal"

//   constructor() { }
 
// }
addDetails : any =[];
// cardCollection: any =[
//   {
//     image:"/assets/Vanila Cake.jpg",
//     name:"Vanila Cake",
//     eggless:true,
//     price: "100",
//     weight:"500gm"
//   },
//   {
//     image:"/assets/Chocolate Cake.jpg",
//     name:"Chocolate Cake",
//     eggless:false,
//     price: "300",
//     weight:"1kg"
//   },
//   {
//     image:"/assets/Pineapple-Cake.jpg",
//     name:"Pineapple Cake",
//     eggless:true,
//     price: "100",
//     weight:"500gm"
//   },
//   {
//     image:"/assets/Strawberry Cake.jpg",
//     name:"Strawberry Cake",
//     eggless:true,
//     price: "500",
//     weight:"2kg"
//   }
// ]

cakeCollection : any=[];



  constructor(private router: Router) { }
  validate(inputText:any)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.match(mailformat))
{
alert("Valid email address!");

return true;
}
else
{
alert("You have entered an invalid email address!");

return false;
}
}
}
