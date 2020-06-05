import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../../models/ingredients/ingredients';
import {IngredientsService} from '../../services/ingredients/ingredients.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit {
  ingredients: Ingredients[];

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients(): void {
    this.ingredientsService.getIngredients().subscribe(ingredients => this.ingredients = ingredients);
  }
}
