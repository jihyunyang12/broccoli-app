import {Ingredients} from '../models/ingredients/ingredients';
import {Recipe} from '../models/recipe/recipe';
import {IngredientsItem} from '../models/ingredients-item/ingredients-item';
import {IngredientsGroup } from '../models/ingredients-group/ingredients-group';

export const INGREDIENTS: Ingredients[] = [
  {ingredientsName: 'Broccoli', unit: 'EA'},
  {ingredientsName: 'Chicken tender', unit: 'LB'},
  {ingredientsName: 'Potato', unit: 'EA'},
  {ingredientsName: 'Onion', unit: 'EA'},
  {ingredientsName: 'Egg', unit: 'EA'},
  {ingredientsName: 'Shrimp', unit: 'LB'},
  {ingredientsName: 'Tomato Sauce', unit: 'Bottle'},
  {ingredientsName: 'Penne', unit: 'Box'}
]

export const INGREDIENTSVEG: Ingredients[] = [
  {ingredientsName: 'Broccoli', unit: 'EA'},
  {ingredientsName: 'Potato', unit: 'EA'},
  {ingredientsName: 'Onion', unit: 'EA'}
]

export const INGREDIENTSMEAT: Ingredients[] = [
  {ingredientsName: 'Chicken tender', unit: 'LB'},
  {ingredientsName: 'Pork belly', unit: 'LB'}
]

export const INGREDIENTSSEAFOOD: Ingredients[] = [
  {ingredientsName: 'Shrimp', unit: 'LB'},
  {ingredientsName: 'Salmon', unit: 'LB'}
]


export const INGREDIENTSGROUPS: IngredientsGroup[] = [
  {id: 1, name: 'Vegetable', ingredients: INGREDIENTSVEG},
  {id: 2, name: 'Meat', ingredients: INGREDIENTSMEAT},
  {id: 3, name: 'Seafood', ingredients: INGREDIENTSSEAFOOD}
]


export const ing1: Ingredients = new Ingredients(INGREDIENTS[1].ingredientsName, INGREDIENTS[1].unit);
export const INGREDIENTSLIST1: IngredientsItem[] = [
  {ingredient: INGREDIENTS[1], qty: 1},
  {ingredient: INGREDIENTS[2], qty: 2},
  {ingredient: INGREDIENTS[3], qty: 3}
]
export const INGREDIENTSLIST2: IngredientsItem[] = [
  {ingredient: INGREDIENTS[3], qty: 1},
  {ingredient: INGREDIENTS[5], qty: 1},
  {ingredient: INGREDIENTS[6], qty: 1},
  {ingredient: INGREDIENTS[7], qty: 0.5}
]

export const RECIPES: Recipe[] = [
  {id: 1, recipeName: 'Curry', ingredientsList: INGREDIENTSLIST1 },
  {id: 2, recipeName: 'Shrimp Pasta', ingredientsList: INGREDIENTSLIST2}
]
