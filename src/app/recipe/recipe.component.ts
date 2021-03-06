import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from 'src/model/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.sass']
})
export class RecipeComponent implements OnInit {

  @Input() recipe?: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
