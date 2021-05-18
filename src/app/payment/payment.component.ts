import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from '../can-deactivate-guard.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements CanComponentDeactivate {

  constructor() { }
canDeactivate(){
  
  return window.confirm("discard change");
}
  ngOnInit(): void {
  }

}
