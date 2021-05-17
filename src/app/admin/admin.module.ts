import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EditdetailsComponent } from '../editdetails/editdetails.component';

const routes : Routes = [
  {path: '' , component:AdminComponent},
  {path:'editdetails/:cakeid',component:EditdetailsComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModule { }
