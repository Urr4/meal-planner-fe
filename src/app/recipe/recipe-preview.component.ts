import { Component, OnInit, Input} from '@angular/core';
import { RecipePreview } from 'src/model/recipe-preview';

@Component({
  selector: 'app-recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.sass']
})
export class RecipePreviewComponent implements OnInit {

  @Input() recipePreview?: RecipePreview;

  constructor() { }

  ngOnInit(): void {
  }

}
