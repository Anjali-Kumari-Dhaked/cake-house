import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router , CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
cakeCollection : any=[];
checkoutDetails:any={};
orderconfirm:any = false;
summary:any=false;
address:any=false;
apiUrl:any;

  constructor(private router: Router, private http: HttpClient ,private toaster:ToastrService) {
  
   }

 order(){
  let apiUrl = `https://apifromashu.herokuapp.com/api/cakecart`;
  this.http.post(apiUrl, {}).subscribe(
    (response: any) => {
      this.checkoutDetails['cakes'] = response.data
      this.checkoutDetails.price = response.data.reduce((acc:any, value:any) => acc + value.price,0);
      console.log(this.checkoutDetails);

    },
    (error:any) => {
      console.log('this is response' + error);
    }
  );
}



  validate(inputText:any)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.match(mailformat))
{
// alert("Valid email address!");

return true;
}
else
{
// alert("You have entered an invalid email address!");

return false;
}
}
}
