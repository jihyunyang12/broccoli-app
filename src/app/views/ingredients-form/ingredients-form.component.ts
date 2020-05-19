import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-ingredients-form',
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.css']
})
export class IngredientsFormComponent implements OnInit {

  ingredientsForm;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.ingredientsForm = this.formBuilder.group({
      ingredientsName: '',
      unit: '',
      qty: 0
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
