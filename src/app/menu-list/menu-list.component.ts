import { Component, OnInit } from '@angular/core';
import { MainDishService, MainDish} from '../service/main-dish.service';
import { BeverageService, Beverage} from '../service/beverage.service';
import { DessertService, Dessert} from '../service/dessert.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  mainDishList: MainDish[] = [];
  beverageList: Beverage[] = [];
  dessertList: Dessert[] = [];

  constructor(private manDishService: MainDishService, private beverageService: BeverageService,
              private dessertService: DessertService) { }

  ngOnInit(): void {
    this.getMainDishList();
    this.getBeverageList();
    this.getDessertList();
  }

  getMainDishList(){
    this.manDishService.get().subscribe({
      next: (data) => this.mainDishList = data,
      error: (error) => console.log(error)
    },
    )
  }

  getBeverageList(){
    this.beverageService.get().subscribe({
      next: (data) => this.beverageList = data,
      error: (error) => console.log(error) 
    },
    )
  }

  getDessertList(){
    this.dessertService.get().subscribe({
      next: (data) => this.dessertList = data,
      error: (error) => console.log(error)
    },
    )
  }

  printMenu(food: MainDish)
  {
    alert(`${food.name}, 價格為 ${food.price}`);
  }
}
