import { Directive ,Input} from '@angular/core';
import {CommonService} from "./common.service";
@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {
 @Input() searchKey:any;
  constructor(private cs:CommonService) { 

  }
ngOnChanges(changes: any){
//   if(changes.searchKey.currentValue){
//     this.cs.cakeCollection = this.cs.cardCollection.filter((e:any)=>e.name.toLowerCase().includes(changes.searchKey.currentValue.toLowerCase()));
//   }
// else{
//   this.cs.cakeCollection =this.cs.cardCollection;
// }
}

}
