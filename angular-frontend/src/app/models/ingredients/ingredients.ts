export class Ingredients {
  ingredientsName: string;
  unit: string;
  qty: number;

  constructor(ingredientsName: string, unit: string, qty: number){
    this.ingredientsName = ingredientsName;
    this.unit = unit;
    this.qty = qty;
  }

}
