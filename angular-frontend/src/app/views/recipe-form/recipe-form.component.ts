import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe/recipe';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { IngredientsItem } from 'src/app/models/ingredients-item/ingredients-item';
import { Ingredients } from 'src/app/models/ingredients/ingredients';
import { IngredientsService } from 'src/app/services/ingredients/ingredients.service';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  recipe: Recipe;

  recipeForm;
  ingredientsListForm;
  
  ingredients : Ingredients[];

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      recipeName: new FormControl(''),
      ingredientsListForm: new FormArray([
        new FormGroup({
          ingredientsName: new FormControl(''),
          qty: new FormControl('')
        })
      ])
    });
  
    this.ingredientsListForm = this.recipeForm.get('ingredientsListForm') as FormArray;
    this.getIngredients();
  }

  addIngredientsListForm() {
    const ingredientsName = new FormControl('');
    const qty = new FormControl('');
    const group = new FormGroup({ingredientsName, qty});
    this.ingredientsListForm.push(group);
  }

  getIngredients(): void {
    this.ingredientsService.getIngredients().subscribe(ingredients => this.ingredients = ingredients);
  }
}
