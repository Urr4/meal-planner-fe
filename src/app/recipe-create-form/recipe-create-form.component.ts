import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateRecipeRequest } from 'src/model/create-recipe-request';
import { RecipeService } from '../recipe.service';
import { IngredientDescriptor } from 'src/model/ingredient-descriptor';
import { Ingredient } from 'src/model/ingredient';

@Component({
  selector: 'app-recipe-create-form',
  templateUrl: './recipe-create-form.component.html',
  styleUrls: ['./recipe-create-form.component.sass']
})
export class RecipeCreateFormComponent implements OnInit {

  createRecipeRequest: CreateRecipeRequest = new CreateRecipeRequest("", "", []);

  constructor(
    private recipeService: RecipeService,
    private router: Router
   ) { }

  ngOnInit(): void {
  }

  save(){
    if(this.createRecipeRequest){
      console.log("Creating ",this.createRecipeRequest)
      this.recipeService.createRecipe(this.createRecipeRequest)
        .subscribe(createRecipeRequest => console.log("Created new Recipe"));
    }
  }

  back(){
    this.router.navigate(['/recipe']);
  }

  addNewIngredient(){
      if(this.createRecipeRequest){
        const ingredient = new Ingredient('');
        const ingredientDescriptor = new IngredientDescriptor(ingredient, "create");
        ingredientDescriptor.ingredient = ingredient;
        this.createRecipeRequest.createIngredientDescriptorRequest.push(ingredientDescriptor);
      }
    }

}
