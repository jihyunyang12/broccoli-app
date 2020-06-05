import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsFormComponent } from './views/ingredients-form/ingredients-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IngredientsListComponent } from './views/ingredients-list/ingredients-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsFormComponent,
    IngredientsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }