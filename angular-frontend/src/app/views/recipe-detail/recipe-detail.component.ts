import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../models/recipe/recipe';
import {RecipeService} from '../../services/recipe/recipe.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  //recipes: Recipe[];
  recipe$: Observable<Recipe>;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //this.getRecipes();
    this.recipe$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.recipeService.getRecipe(params.get('id')))
    );
  }

  // getRecipes(): void {
  //   this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  // }
}
