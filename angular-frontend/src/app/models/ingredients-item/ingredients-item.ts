import {Ingredients} from '../ingredients/ingredients';

export class IngredientsItem {

  ingredient: Ingredients;
  qty: number;

  constructor(ingredient: Ingredients, qty: number){
    this.ingredient = ingredient;
    this.qty = qty;
  }

}
