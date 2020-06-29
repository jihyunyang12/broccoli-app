import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Ingredients} from '../../models/ingredients/ingredients';
import {INGREDIENTS, RECIPES} from '../../mock/mock.data';
import {Recipe} from '../../models/recipe/recipe';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]>{
    return of(RECIPES);
  }

  getRecipe(id: number | string) {
    return this.getRecipes().pipe(
      // (+) before `id` turns the string into a number
      map((recipes: Recipe[]) => recipes.find(recipe => recipe.id === +id))
    );
  }

  addRecipe(recipe: Recipe): void {
    
    recipe.id = this.getRecipeID(RECIPES);
    RECIPES.push(recipe);
    console.log(RECIPES);
  }

  getRecipeID(RECIPES): number {
    return RECIPES.length+1;
  }

}
