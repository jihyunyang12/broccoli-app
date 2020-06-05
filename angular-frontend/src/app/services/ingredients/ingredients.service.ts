import { Injectable } from '@angular/core';
import {Ingredients} from '../../models/ingredients/ingredients';
import {INGREDIENTS} from '../../mock/mock.data';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor() { }

  getIngredients(): Observable<Ingredients[]> {
    return of(INGREDIENTS);
  }

  addIngredient(ingredient: Ingredients): void {
    console.log(ingredient);
    INGREDIENTS.push(ingredient);
  }

}
