import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../models/recipe/recipe';
import {RecipeService} from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }
}
