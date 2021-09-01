import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecipeDetail } from 'src/model/recipe-detail';
import { RecipeService } from '../recipe.service';
import { IngredientDescriptor } from 'src/model/ingredient-descriptor';
import { UpdateRecipeRequest } from 'src/model/update-recipe-request';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/model/ingredient';

@Component({
  selector: 'app-recipe-input-form',
  templateUrl: './recipe-input-form.component.html',
  styleUrls: ['./recipe-input-form.component.sass']
})
export class RecipeInputFormComponent implements OnInit {

  recipeDetail?: RecipeDetail;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe(
      (params:Params) => this.recipeService.getRecipeDetailById(params.id).subscribe(
        recipeDetail => {
          this.recipeDetail = recipeDetail;
          this.recipeDetail.ingredientDescriptors.forEach((desc:IngredientDescriptor) => desc.type = "update")
          this.loading= false;
          console.log("Loaded ", this.recipeDetail)
        }
      )
    );
  }

  save(){
    if(this.recipeDetail){
    console.log("Updating ",this.recipeDetail)
    this.recipeService.updateRecipe(this.recipeDetail)
      .subscribe(recipeDetail => console.log("Saved RecipeDetails"));
    }
  }

  back(){
    if(this.recipeDetail){
      this.router.navigate(['/recipe/view/'+this.recipeDetail.id]);
    }
  }

  //TODO Value resets if you add more than one and once you selcted a unit/ingredient, you can only select this one for each
  addNewIngredient(){
    if(this.recipeDetail){
      const ingredient = new Ingredient('');
      const ingredientDescriptor = new IngredientDescriptor(ingredient, "create");
      ingredientDescriptor.ingredient = ingredient;
      this.recipeDetail.ingredientDescriptors.push(ingredientDescriptor);
    }
  }

}
