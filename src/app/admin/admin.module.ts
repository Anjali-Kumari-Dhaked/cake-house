import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EditdetailsComponent } from '../editdetails/editdetails.component';
import { AdminAddCakeComponent } from '../admin-add-cake/admin-add-cake.component';
import { CanDeactivateGuardService } from '../can-deactivate-guard.service';

const routes : Routes = [
  {path: '' , component:AdminComponent,canDeactivate:[CanDeactivateGuardService]},
  {path:'admin-add-cake', component:AdminAddCakeComponent},
  {path:'editdetails/:cakeid',component:EditdetailsComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModule { }
