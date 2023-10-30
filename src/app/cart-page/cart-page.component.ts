import { FoodService } from './../services/food/food.service';
import { CartItem } from './../shared/models/CartItem';
import { Cart } from '../shared/models/Cart';
import { CartService } from './../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{

  cart!:Cart;
  constructor(private CartService: CartService){
   
    this.setCart()
  }


  ngOnInit(): void {
  }

removeFromCart(CartItem:CartItem){
  this.CartService.removeFromCart(CartItem.food.id);
  this.setCart();
}

changeQuantity(cartItem:CartItem, quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.CartService.changeQuantity(cartItem.food.id, quantity)
  this.setCart();
}

  setCart(){
    this.cart=this.CartService.getCart();
  }
}
