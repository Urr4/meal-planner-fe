import { NgModule } from '@angular/core';
import { RecipeSectionComponent } from './recipe-section/recipe-section.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: RecipeSectionComponent},
    { path: 'recipes', component: RecipeSectionComponent},
    { path: 'ingredients', component: RecipeSectionComponent},
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
