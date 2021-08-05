import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/model/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-section',
  templateUrl: './recipe-section.component.html',
  styleUrls: ['./recipe-section.component.sass']
})
export class RecipeSectionComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes()
      .subscribe(recipes => this.recipes = recipes)
  }

}
