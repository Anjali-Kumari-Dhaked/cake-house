import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(price:number, ...args: unknown[]): unknown {
    // price=price+50;
     return price;
  }

}
