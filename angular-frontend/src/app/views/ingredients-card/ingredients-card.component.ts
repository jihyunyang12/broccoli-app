import { Component, OnInit } from '@angular/core';
import { IngredientsGroup } from '../../models/ingredients-group/ingredients-group';
import { IngredientsService } from '../../services/ingredients/ingredients.service';

@Component({
  selector: 'app-ingredients-card',
  templateUrl: './ingredients-card.component.html',
  styleUrls: ['./ingredients-card.component.css']
})
export class IngredientsCardComponent implements OnInit {

  ingredientsGroups: IngredientsGroup[];
  
  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit(): void {
    this.getIngredientsGroup();
  }

  getIngredientsGroup(): void {
    this.ingredientsService.getIngredientsGroups().subscribe(ingredientsGroups => this.ingredientsGroups = ingredientsGroups);
  }

}
