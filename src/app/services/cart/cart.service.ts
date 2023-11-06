import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart=this.getCartFromLocalStorage();

addToCart(food:Food):void{
  let cartItem= this.cart.items.find(item=>item.food.id==food.id);
if(cartItem){
  this.changeQuantity(food.id,cartItem.quantity+1);
  this.setCartToLocalStorage();
  return;
}
this.cart.items.push(new CartItem(food));
}

removeFromCart(foodId:number):void{
  this.cart.items=
  this.cart.items.filter(item=>item.food.id!=foodId);
  this.setCartToLocalStorage();
}

changeQuantity(foodId:number, quantity:number){
let cartItem =this.cart.items.find(item=>item.food.id===foodId);
if(!cartItem) return;
cartItem.quantity=quantity;
this.setCartToLocalStorage();
}
getCart():Cart{
  return this.cart
}
private setCartToLocalStorage():void{
  const cartJson = JSON.stringify(this.cart);
  localStorage.setItem('Cart', cartJson)
}
private getCartFromLocalStorage(): Cart {
  const cartJson = localStorage.getItem('Cart');
  return cartJson ? JSON.parse(cartJson) : new Cart();
}
}
