import { NgModule } from '@angular/core';
import { RecipeSectionComponent } from './recipe-section/recipe-section.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeInputFormComponent } from './recipe-input-form/recipe-input-form.component';
import { RecipeCreateFormComponent } from './recipe-create-form/recipe-create-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: RecipeSectionComponent},
    { path: 'recipe/view/:id', component: RecipeDetailsComponent},
    { path: 'recipe/edit/:id', component: RecipeInputFormComponent},
    { path: 'recipe/create', component: RecipeCreateFormComponent},
    { path: 'ingredients', component: RecipeSectionComponent},
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
