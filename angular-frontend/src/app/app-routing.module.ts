import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './views/recipe-detail/recipe-detail.component';
import { IngredientsListComponent } from './views/ingredients-list/ingredients-list.component';
import { IngredientsFormComponent } from './views/ingredients-form/ingredients-form.component';
import { RecipeFormComponent } from './views/recipe-form/recipe-form.component';


const routes: Routes = [
  { path: 'ingredients', component: IngredientsListComponent },
  { path: 'recipe', component: RecipeDetailComponent },
  { path: 'ingredients/ingredientsForm', component: IngredientsFormComponent },
  { path: 'recipe/recipeForm', component: RecipeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
