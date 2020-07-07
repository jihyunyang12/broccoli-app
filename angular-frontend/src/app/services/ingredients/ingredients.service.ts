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

}
