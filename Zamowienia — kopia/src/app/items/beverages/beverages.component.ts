import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products} from '../products';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.scss']
})
export class BeveragesComponent implements OnInit {

  beverages$: Observable<any> = this.http.get('/api/beverages')
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
