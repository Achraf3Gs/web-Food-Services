import { CartService } from './../services/cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from './../services/food/food.service';
import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!:Food;
  constructor(private foodService:FoodService,
     private activatedRoute:ActivatedRoute,
     private CartService:CartService,
     private router: Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food= foodService.getFoodById(params['id']);
    })
  }


  ngOnInit(): void {
 this.foodService.getFoodById
  }

  addToCart(){
    this.CartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
