import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipePreview } from 'src/model/recipe-preview';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-section',
  templateUrl: './recipe-section.component.html',
  styleUrls: ['./recipe-section.component.sass']
})
export class RecipeSectionComponent implements OnInit {

  loading: boolean = true;
  recipePreviews: RecipePreview[] = [];

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipePreviews()
      .subscribe(
        recipePreviews => {
          this.recipePreviews = recipePreviews
        },
        err => {
          console.error("Failed to query recipes");
        },
        () => this.loading = false
      )
  }

  selectRecipe(id: number){
    this.router.navigate(['/recipe/view/'+id]);
  }

  createNewRecipe(){
    this.router.navigate(['/recipe/create']);
  }

}
