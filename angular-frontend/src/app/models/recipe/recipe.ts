import {Ingredients} from '../ingredients/ingredients';

export class Recipe {
  recipeName: string;
  ingredientsList: {Ingredients, number};

  constructor(recipeName: string, ingredientsList: {Ingredients, number}){
    this.recipeName = recipeName;
    this.ingredientsList = ingredientsList;
  }
}
