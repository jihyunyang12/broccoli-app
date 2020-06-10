import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Ingredients} from '../../models/ingredients/ingredients';
import {INGREDIENTS, RECIPES} from '../../mock/mock.data';
import {Recipe} from '../../models/recipe/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]>{
    return of(RECIPES);
  }

}
