import { Injectable } from '@angular/core';
import {Ingredients} from '../../models/ingredients/ingredients';
import {INGREDIENTS, INGREDIENTSGROUPS} from '../../mock/mock.data';
import {Observable, of} from 'rxjs';
import { IngredientsGroup } from '../../models/ingredients-group/ingredients-group';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  ingredients: Ingredients[] = [];


  constructor() { }

  getIngredients(): Observable<Ingredients[]> {
    return of(INGREDIENTS);
  }

  getIngredientsGroups(): Observable<IngredientsGroup[]> {
    return of(INGREDIENTSGROUPS);
  }

  getIngredientsGroup(id: number | string) {
    return this.getIngredientsGroups().pipe(
      // (+) before `id` turns the string into a number
      map((ingredientsGroups: IngredientsGroup[]) => ingredientsGroups.find(ingredientsGroup => ingredientsGroup.id === +id))
    );
  }

  addIngredient(ingredient: Ingredients, ingredientsGroupId: number): void {
    console.log(ingredient);
    //INGREDIENTS.push(ingredient);
    INGREDIENTSGROUPS[ingredientsGroupId-1].ingredients.push(ingredient);
  }

  addIngredientsGroup(ingredientsGroup: IngredientsGroup): void {
    ingredientsGroup.id = this.getIngredientsGroupID(INGREDIENTSGROUPS);
    ingredientsGroup.ingredients = this.ingredients;
    console.log(ingredientsGroup);
    INGREDIENTSGROUPS.push(ingredientsGroup);
    console.log('!!', INGREDIENTSGROUPS);
  }

  getIngredientsGroupID(INGREDIENTSGROUPS: IngredientsGroup[]): number {
    return INGREDIENTSGROUPS.length+1;
  }
}
