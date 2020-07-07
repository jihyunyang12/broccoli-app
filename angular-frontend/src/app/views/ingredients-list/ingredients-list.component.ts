import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../../models/ingredients/ingredients';
import {IngredientsService} from '../../services/ingredients/ingredients.service';
import { IngredientsGroup } from '../../models/ingredients-group/ingredients-group';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit {
  // ingredients: Ingredients[];

  // constructor(private ingredientsService: IngredientsService) { }

  // ngOnInit(): void {
  //   this.getIngredients();
  // }

  // getIngredients(): void {
  //   this.ingredientsService.getIngredients().subscribe(ingredients => this.ingredients = ingredients);
  // }

  ingredientsgroup$: Observable<IngredientsGroup>;

  constructor(private ingredientsService: IngredientsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //this.getRecipes();
    this.ingredientsgroup$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.ingredientsService.getIngredientsGroup(params.get('id')))
    );
  }

}
