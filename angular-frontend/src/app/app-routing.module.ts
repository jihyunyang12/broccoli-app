import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './views/recipe-detail/recipe-detail.component';
import { IngredientsListComponent } from './views/ingredients-list/ingredients-list.component';
import { IngredientsFormComponent } from './views/ingredients-form/ingredients-form.component';
import { RecipeFormComponent } from './views/recipe-form/recipe-form.component';
import { RecipeCardComponent } from './views/recipe-card/recipe-card.component';
import { IngredientsCardComponent } from './views/ingredients-card/ingredients-card.component';


const routes: Routes = [
  { path: 'ingredients', component: IngredientsCardComponent },
  { path: 'ingredientsGroup/:id', component: IngredientsListComponent },
  { path: 'recipe/recipeForm', component: RecipeFormComponent},
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'recipe', component: RecipeCardComponent },
  { path: 'ingredientsGroup/:id/ingredientsForm', component: IngredientsFormComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
