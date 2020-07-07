import { Ingredients } from '../ingredients/ingredients';

export class IngredientsGroup {
    id: number;
    name: string;
    ingredients: Ingredients[];

    constructor(id: number, name: string, ingredients: Ingredients[]){
        this.id = id;
        this.name = name;
        this.ingredients = ingredients;
    }
}
