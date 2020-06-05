import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { IngredientsService} from '../../services/ingredients/ingredients.service';
import { Ingredients} from '../../models/ingredients/ingredients';

@Component({
  selector: 'app-ingredients-form',
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.css']
})
export class IngredientsFormComponent implements OnInit {

  ingredient: Ingredients;
  ingredientsForm;

  ingredientsNameFormControl = new FormControl('', Validators.required);
  unitFormControl = new FormControl('', Validators.required);
  categoryFormControl = new FormControl('', Validators.required);

  constructor(
    private ingredientsService: IngredientsService
  ) {
    this.ingredientsForm = new FormGroup({
      ingredientsName: this.ingredientsNameFormControl,
      unit: this.unitFormControl,
      category: this.categoryFormControl
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void{
    this.addIngredient();
  }
  addIngredient(): void{

    this.ingredient = new Ingredients(this.ingredientsNameFormControl.value, this.unitFormControl.value, this.categoryFormControl.value);
    this.ingredientsService.addIngredient(this.ingredient);
  }
}
