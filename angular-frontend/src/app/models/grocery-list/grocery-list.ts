import {Recipe} from '../recipe/recipe';

export class GroceryList {
  date: Date;
  recipeList: {Recipe, number};

  constructor(date: Date, recipeList: {Recipe, number}){
    this.date = date;
    this.recipeList = recipeList;
  }

}
