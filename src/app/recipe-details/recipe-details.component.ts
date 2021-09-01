import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecipeDetail } from 'src/model/recipe-detail';
import { IngredientDescriptor } from 'src/model/ingredient-descriptor';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.sass']
})
export class RecipeDetailsComponent implements OnInit {

  loading: boolean = false;
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
          this.loading = true
          this.recipeDetail = recipeDetail
          this.recipeDetail.ingredientDescriptors.forEach((desc:IngredientDescriptor) => desc.type = "update")
          this.loading= false
          console.log("Loaded ", this.recipeDetail)
        }
      )
    );
  }

  edit(){
    if(this.recipeDetail){
      this.router.navigate(['/recipe/edit/'+this.recipeDetail.id]);
    }
  }

  back(){
    this.router.navigate(['/recipe']);
  }

}
