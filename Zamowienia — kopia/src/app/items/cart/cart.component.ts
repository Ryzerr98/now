import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public items = this.cartService.getItems();
  value: any;
  private total=0;
  constructor(
    private cartService: CartService
  ) { }
  ngOnInit(): void {
  
  }
  public findsum(data: any)
  {
    debugger  
 this.value=data 
  console.log(this.value);  
 for(let j=0;j<data.length;j++){   
 this.total+= this.value[j].Salary  
       console.log(this.total)
  }
}

}