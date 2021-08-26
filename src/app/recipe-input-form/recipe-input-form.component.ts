import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecipeDetail } from 'src/model/recipe-detail';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/model/ingredient';
import { IngredientDescriptor } from 'src/model/ingredient-descriptor';

@Component({
  selector: 'app-recipe-input-form',
  templateUrl: './recipe-input-form.component.html',
  styleUrls: ['./recipe-input-form.component.sass']
})
export class RecipeInputFormComponent implements OnInit {

  loading: boolean = true;
  recipeDetail?: RecipeDetail

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => this.recipeService.getRecipeDetailById(params.id).subscribe(
        recipeDetail => {
          this.recipeDetail = recipeDetail;
          console.log(recipeDetail);
          this.loading = false;
        }
      )
    );
  }

  save(){
    if(this.recipeDetail){
      this.router.navigate(['/recipe/view/'+this.recipeDetail.id]);
    }
  }

  // TODO rewrite logic, so that the on-init logic doesn't trigger after adding ingredient
  addNewIngredient(){
    if(this.recipeDetail){
      const ingredient = new Ingredient();
      const ingredientDescriptor = new IngredientDescriptor(ingredient);
      ingredientDescriptor.ingredient = ingredient;
      this.recipeDetail.ingredientDescriptors.push(ingredientDescriptor);
    }
  }

}
