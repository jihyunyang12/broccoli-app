import {Ingredients} from '../models/ingredients/ingredients';
import {Recipe} from '../models/recipe/recipe';
import {IngredientsItem} from '../models/ingredients-item/ingredients-item';
import {IngredientsGroup } from '../models/ingredients-group/ingredients-group';

export const INGREDIENTS: Ingredients[] = [
  {ingredientsName: 'Broccoli', unit: 'EA', qty:0},
  {ingredientsName: 'Chicken tender', unit: 'LB', qty:0},
  {ingredientsName: 'Potato', unit: 'EA', qty:0},
  {ingredientsName: 'Onion', unit: 'EA', qty:0},
  {ingredientsName: 'Egg', unit: 'EA', qty:0},
  {ingredientsName: 'Shrimp', unit: 'LB', qty:0},
  {ingredientsName: 'Tomato Sauce', unit: 'Bottle', qty:0},
  {ingredientsName: 'Penne', unit: 'Box', qty:0}
]

export const INGREDIENTSVEG: Ingredients[] = [
  {ingredientsName: 'Broccoli', unit: 'EA', qty:0},
  {ingredientsName: 'Potato', unit: 'EA', qty:0},
  {ingredientsName: 'Onion', unit: 'EA', qty:0}
]

export const INGREDIENTSMEAT: Ingredients[] = [
  {ingredientsName: 'Chicken tender', unit: 'LB', qty:0},
  {ingredientsName: 'Pork belly', unit: 'LB', qty:0}
]

export const INGREDIENTSSEAFOOD: Ingredients[] = [
  {ingredientsName: 'Shrimp', unit: 'LB', qty:0},
  {ingredientsName: 'Salmon', unit: 'LB', qty:0}
]


export const INGREDIENTSGROUPS: IngredientsGroup[] = [
  {id: 1, name: 'Vegetable', ingredients: INGREDIENTSVEG},
  {id: 2, name: 'Meat', ingredients: INGREDIENTSMEAT},
  {id: 3, name: 'Seafood', ingredients: INGREDIENTSSEAFOOD}
]


export const INGREDIENTSVEG_CURRY: Ingredients[] = [
  {ingredientsName: 'Potato', unit: 'EA', qty:1},
  {ingredientsName: 'Onion', unit: 'EA', qty:2}
]

export const INGREDIENTSMEAT_CURRY: Ingredients[] = [
  {ingredientsName: 'Chicken tender', unit: 'LB', qty:1}
]

export const INGREDIENTSVEG_SHRIMPPASTA: Ingredients[] = [
  {ingredientsName: 'Broccoli', unit: 'EA', qty:2},
  {ingredientsName: 'Onion', unit: 'EA', qty:1}
]

export const INGREDIENTSSEAFOOD_SHRIMPPASTA: Ingredients[] = [
  {ingredientsName: 'Shrimp', unit: 'LB', qty:8}
]

export const INGREDIENTSGROUPS_CURRY: IngredientsGroup[] = [
  {id: 1, name: 'Vegetable', ingredients: INGREDIENTSVEG_CURRY},
  {id: 2, name: 'Meat', ingredients: INGREDIENTSMEAT_CURRY}
]

export const INGREDIENTSGROUPS_SHRIMPPASTA: IngredientsGroup[] = [
  {id: 1, name: 'Vegetable', ingredients: INGREDIENTSVEG_SHRIMPPASTA},
  {id: 2, name: 'Seafood', ingredients: INGREDIENTSSEAFOOD_SHRIMPPASTA}
]

export const ing1: Ingredients = new Ingredients(INGREDIENTS[1].ingredientsName, INGREDIENTS[1].unit, INGREDIENTS[1].qty);

export const RECIPES: Recipe[] = [
  {id: 1, recipeName: 'Curry', ingredientsGroupList: INGREDIENTSGROUPS_CURRY },
  {id: 2, recipeName: 'Shrimp Pasta', ingredientsGroupList: INGREDIENTSGROUPS_SHRIMPPASTA}
]
