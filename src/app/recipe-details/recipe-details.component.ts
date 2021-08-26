import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecipeDetail } from 'src/model/recipe-detail';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.sass']
})
export class RecipeDetailsComponent implements OnInit {

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

  edit(){
    if(this.recipeDetail){
      this.router.navigate(['/recipe/edit/'+this.recipeDetail.id]);
    }
  }

}
