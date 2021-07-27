import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products} from '../products';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.scss']
})

export class BurgersComponent implements OnInit {
  
 burgers$: Observable<any> = this.http.get('/api/burgers')
 constructor( private http: HttpClient,
  private route: ActivatedRoute,
  private cartService: CartService) { }

  addToCart(product: Products) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {
  }

}
