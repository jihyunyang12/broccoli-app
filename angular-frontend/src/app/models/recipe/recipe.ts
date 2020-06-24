import {Ingredients} from '../ingredients/ingredients';
import {IngredientsItem} from '../ingredients-item/ingredients-item';

export class Recipe {
  id: number;
  recipeName: string;
  ingredientsList: IngredientsItem[];

  constructor(id: number, recipeName: string, ingredientsList: IngredientsItem[]){
    this.id = id;
    this.recipeName = recipeName;
    this.ingredientsList = ingredientsList;
  }
}
