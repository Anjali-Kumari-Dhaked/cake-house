import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from '../summary/summary.component';
import { AddressComponent } from '../address/address.component';

const routes : Routes = [
  {path: 'checkout', children:[
    {path:"", component:SummaryComponent},
    { path:"address", component:AddressComponent}
  ]},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutModule { }
