import {Ingredients} from '../ingredients/ingredients';
import {IngredientsItem} from '../ingredients-item/ingredients-item';

export class Recipe {
  recipeName: string;
  ingredientsList: IngredientsItem[];

  constructor(recipeName: string, ingredientsList: IngredientsItem[]){
    this.recipeName = recipeName;
    this.ingredientsList = ingredientsList;
  }
}
