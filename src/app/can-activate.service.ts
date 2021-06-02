import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService {

  constructor(private toaster:ToastrService, private router
    :Router) { }
  canActivate(
      route:ActivatedRouteSnapshot,
      state:RouterStateSnapshot
    ): boolean{
      console.log(route,state);
      if(state.url==="/login"){
        if(localStorage.user){
          this.toaster.info("Login already");
          this.router.navigate(['/']);
          return false;
        }
        else{
          return true;
        }
      }
      if(localStorage.user){
        return true;
      }
      this.toaster.info("You should login first");
      this.router.navigate(['/login']);
      return false;
    }
}
