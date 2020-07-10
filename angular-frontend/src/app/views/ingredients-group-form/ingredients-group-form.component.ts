import { Component, OnInit } from '@angular/core';
import { IngredientsGroup } from '../../models/ingredients-group/ingredients-group';
import { Ingredients } from '../../models/ingredients/ingredients';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { IngredientsService } from '../../services/ingredients/ingredients.service';

@Component({
  selector: 'app-ingredients-group-form',
  templateUrl: './ingredients-group-form.component.html',
  styleUrls: ['./ingredients-group-form.component.css']
})
export class IngredientsGroupFormComponent implements OnInit {

  ingredientsGroup: IngredientsGroup;
  ingredientsGroupForm;
  ingerdients: Ingredients[];

  ingredientsGroupNameFormControl = new FormControl('', Validators.required);

  constructor(
    private ingredientsService: IngredientsService
  ) {
    this.ingredientsGroupForm = new FormGroup({
      name: this.ingredientsGroupNameFormControl,
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void{
    this.addIngredientGroup();
    console.log(this.ingredientsGroupForm.value.name);
  }
  addIngredientGroup(): void{

    console.log(this.ingredientsGroupForm.value);
    console.log(this.ingredientsGroupForm);

    this.ingredientsGroup = this.ingredientsGroupForm.value;
    this.ingredientsService.addIngredientsGroup(this.ingredientsGroup);
  }
}
