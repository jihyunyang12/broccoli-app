import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe/recipe';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { IngredientsItem } from '../..//models/ingredients-item/ingredients-item';
import { Ingredients } from '../../models/ingredients/ingredients';
import { IngredientsService } from '../../services/ingredients/ingredients.service';
import { RecipeService } from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  recipe: Recipe;

  recipeForm;
  ingredientsList;
  //ingredientsList: IngredientsItem[];
  ingredients : Ingredients[];

  constructor(private ingredientsService: IngredientsService, private recipeService: RecipeService) {

    this.recipeForm = new FormGroup({
      recipeName: new FormControl(''),
      ingredientsList: new FormArray([
        new FormGroup({
          ingredient: new FormControl(''),
          qty: new FormControl('')
        })
      ])
    });

  }

  ngOnInit(): void {

    this.ingredientsList = this.recipeForm.get('ingredientsList') as FormArray;
    this.getIngredients();
  }

  addingredientsList() {
    const ingredient = new FormControl('');
    const qty = new FormControl('');
    const group = new FormGroup({ingredient, qty});
    this.ingredientsList.push(group);
  }

  getIngredients(): void {
    this.ingredientsService.getIngredients().subscribe(ingredients => this.ingredients = ingredients);
  }

  onSubmit(): void{
    console.log("add recipe submit")
    this.addRecipe();
    console.log(this.recipeForm.value.recipeName);
  }
  addRecipe(): void{

    this.recipe = this.recipeForm.value;
    

    this.recipeService.addRecipe(this.recipe);
  }
}
