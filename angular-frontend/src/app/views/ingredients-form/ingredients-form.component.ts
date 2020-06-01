import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IngredientsService} from '../../services/ingredients/ingredients.service';
import { Ingredients} from '../../models/ingredients/ingredients';

@Component({
  selector: 'app-ingredients-form',
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.css']
})
export class IngredientsFormComponent implements OnInit {

  ingredientsForm;
  ingredients: Ingredients[];

  constructor(
    private formBuilder: FormBuilder,
    private ingredientsService: IngredientsService
  ) {
    this.ingredientsForm = this.formBuilder.group({
      ingredientsName: '',
      unit: '',
      category: 0
    });
  }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients(): void {
    this.ingredientsService.getIngredients().subscribe(ingredients => this.ingredients = ingredients);
    console.log(this.ingredients[0].ingredientsName);
  }
  onSubmit(){

  }


}
