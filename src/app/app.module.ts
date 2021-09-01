import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RecipePreviewComponent } from './recipe-preview/recipe-preview.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RecipeSectionComponent } from './recipe-section/recipe-section.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeInputFormComponent } from './recipe-input-form/recipe-input-form.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { IngredientDescriptorFormComponent } from './ingredient-descriptor-form/ingredient-descriptor-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipePreviewComponent,
    RecipeSectionComponent,
    RecipeInputFormComponent,
    RecipeDetailsComponent,
    IngredientDescriptorFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
