import { Directive ,Input} from '@angular/core';
import {CommonService} from "./common.service";
@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {
 
  constructor() { 

  }
ngOnChanges(){

}

}
