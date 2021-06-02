import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CakedetailResolverService  implements Resolve<any>{
cakeids:any;
  constructor(private http:HttpClient,) { }
  resolve(route : ActivatedRouteSnapshot, state :RouterStateSnapshot):any{
    this.cakeids = +route.params['cakeid'];
    console.log(this.cakeids);
   
    let apiUrl = `https://apifromashu.herokuapp.com/api/cake/`;
   return this.http.get(apiUrl + this.cakeids);


    
  }
}
