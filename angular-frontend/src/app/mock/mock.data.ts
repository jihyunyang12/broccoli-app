import {Ingredients} from '../models/ingredients/ingredients';
import {Recipe} from '../models/recipe/recipe';
import {IngredientsItem} from '../models/ingredients-item/ingredients-item';

export const INGREDIENTS: Ingredients[] = [
  {ingredientsName: 'Broccoli', unit: 'EA', category: 'Vegetable'},
  {ingredientsName: 'Chicken tender', unit: 'LB', category: 'Meat'},
  {ingredientsName: 'Potato', unit: 'EA', category: 'Vegetable'},
  {ingredientsName: 'Onion', unit: 'EA', category: 'Vegetable'},
  {ingredientsName: 'Egg', unit: 'EA', category: 'Meat'},
  {ingredientsName: 'Shrimp', unit: 'LB', category: 'Seafood'},
  {ingredientsName: 'Tomato Sauce', unit: 'Bottle', category: 'Sauce'},
  {ingredientsName: 'Penne', unit: 'Box', category: 'Noodle'}
]

export const ing1: Ingredients = new Ingredients(INGREDIENTS[1].ingredientsName, INGREDIENTS[1].unit, INGREDIENTS[1].category);
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
  {recipeName: 'Curry', ingredientsList: INGREDIENTSLIST1 },
  {recipeName: 'Shrimp Pasta', ingredientsList: INGREDIENTSLIST2}
]
