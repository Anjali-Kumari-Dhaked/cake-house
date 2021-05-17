import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchingComponent } from './searching/searching.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { MyorderComponent } from './myorder/myorder.component';
import { SummaryComponent } from './summary/summary.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderconfirmComponent } from './orderconfirm/orderconfirm.component';
import { CommonService } from 'cake-house/src/app/common.service';
// import { AppComponent} from './app.component';
// import { from } from 'rxjs';
// import { CakedetailsComponent } from './cakedetails/cakedetails.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
{path:'signup', component:SignupComponent},
{path:'login', component:LoginComponent,canActivate:[CommonService]},
{path: 'forgot',component:ForgotComponent},
{path: 'searching', component:SearchingComponent},
{path: 'cakedetails/:cakeid', component:CakedetailsComponent},
{path: 'add-cart' , component:AddCartComponent, canActivate:[CommonService]},
{path: 'checkout', component: CheckoutComponent, 
canActivate:[CommonService],
children:[
  {path:"", component:SummaryComponent},
  { path:"address", component:AddressComponent},
  {path:"orderconfirm", component:OrderconfirmComponent}
]},
{path:'admin',
canActivate:[CommonService],
 loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
// {path:'editdetails/:cakeid', component:EditdetailsComponent},
{path:'myorder', component:MyorderComponent, canActivate:[CommonService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
