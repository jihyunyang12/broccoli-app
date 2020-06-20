import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsFormComponent } from './views/ingredients-form/ingredients-form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IngredientsListComponent } from './views/ingredients-list/ingredients-list.component';
import { RecipeDetailComponent } from './views/recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from './views/recipe-form/recipe-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsFormComponent,
    IngredientsListComponent,
    RecipeDetailComponent,
    RecipeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
