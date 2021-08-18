import { Component, OnInit } from '@angular/core';
import { RecipePreview } from 'src/model/recipe-preview';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-section',
  templateUrl: './recipe-section.component.html',
  styleUrls: ['./recipe-section.component.sass']
})
export class RecipeSectionComponent implements OnInit {

  recipePreviews: RecipePreview[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipePreviews()
      .subscribe(recipePreviews => this.recipePreviews = recipePreviews)
  }

}
