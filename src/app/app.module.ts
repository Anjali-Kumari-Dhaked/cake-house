import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HighlightDirective } from './highlight.directive';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { SearchComponent } from './search/search.component';
import { CakeCardComponent } from './cake-card/cake-card.component';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';
import { SearchDirective } from './search.directive';
import { SearchingComponent } from './searching/searching.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddCartComponent } from './add-cart/add-cart.component';
import { FilterComponent } from './filter/filter.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AuthinterceptService } from './authintercept.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { MyorderComponent } from './myorder/myorder.component';
import { SummaryComponent } from './summary/summary.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderconfirmComponent } from './orderconfirm/orderconfirm.component';
import { CommonService } from './common.service';
// import {NgxPaginationModule} from 'ngx-pagination'; 



 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HighlightDirective,
    SlidebarComponent,
    SearchComponent,
    CakeCardComponent,
    HomeComponent,
    ForgotComponent,
    SignupComponent,
    SearchDirective,
    SearchingComponent,
    CakedetailsComponent,
    AddCartComponent,
    FilterComponent,
    CheckoutComponent,
    AdminComponent,
    EditdetailsComponent,
    MyorderComponent,
    SummaryComponent,
    AddressComponent,
    PaymentComponent,
    OrderconfirmComponent,

    
    
  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
   
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthinterceptService, multi:true},
  CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
