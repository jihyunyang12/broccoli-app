import {Ingredients} from '../ingredients/ingredients';
import {IngredientsItem} from '../ingredients-item/ingredients-item';
import { IngredientsGroup } from '../ingredients-group/ingredients-group';

export class Recipe {
  id: number;
  recipeName: string;
  ingredientsGroupList: IngredientsGroup[];

  constructor(id: number, recipeName: string, ingredientsGroupList: IngredientsGroup[]){
    this.id = id;
    this.recipeName = recipeName;
    this.ingredientsGroupList = ingredientsGroupList;
  }
}
