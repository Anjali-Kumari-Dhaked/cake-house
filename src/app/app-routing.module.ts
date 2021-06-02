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
import { OrderconfirmComponent } from './orderconfirm/orderconfirm.component';
import { CommonService } from './common.service';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';
import { ResolverService } from './resolver.service';
import { CakedetailResolverService } from './cakedetail-resolver.service';
import { CanActivateService } from './can-activate.service';


const routes: Routes = [
{path:'', component:HomeComponent},
{path:'signup', component:SignupComponent},
{path:'login', component:LoginComponent,canActivate:[CanActivateService]},
{path: 'forgot',component:ForgotComponent},
{path: 'searching', component:SearchingComponent},
{path: 'cakedetails/:cakeid', component:CakedetailsComponent,resolve:[CakedetailResolverService]},
{path: 'add-cart' , component:AddCartComponent,resolve:[ResolverService],canActivate:[CanActivateService]},
{path: 'checkout', component: CheckoutComponent,
children:[
  {path:"", component:SummaryComponent},
  { path:"address", component:AddressComponent},
  {path:"orderconfirm", component:OrderconfirmComponent}
]},
{path:'admin',
canActivate:[CanActivateService],
 loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
// {path:'editdetails/:cakeid', component:EditdetailsComponent},
{path:'myorder', component:MyorderComponent, canActivate:[CanActivateService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
