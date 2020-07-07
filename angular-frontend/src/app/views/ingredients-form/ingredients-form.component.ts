import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { IngredientsService} from '../../services/ingredients/ingredients.service';
import { Ingredients} from '../../models/ingredients/ingredients';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredients-form',
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.css']
})
export class IngredientsFormComponent implements OnInit {

  ingredient: Ingredients;
  ingredientsGroupId: number;
  ingredientsForm;
  private routeSub: Subscription;


  ingredientsNameFormControl = new FormControl('', Validators.required);
  unitFormControl = new FormControl('', Validators.required);

  constructor(
    private ingredientsService: IngredientsService, private route: ActivatedRoute
  ) {
    this.ingredientsForm = new FormGroup({
      ingredientsName: this.ingredientsNameFormControl,
      unit: this.unitFormControl
    });
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.ingredientsGroupId = params['id'];
    });
  }
  onSubmit(): void{
    this.addIngredient();
    console.log(this.ingredientsForm.value.ingredientsName);
  }
  addIngredient(): void{

    this.ingredient = this.ingredientsForm.value;
    this.ingredientsService.addIngredient(this.ingredient, this.ingredientsGroupId);
  }
}
