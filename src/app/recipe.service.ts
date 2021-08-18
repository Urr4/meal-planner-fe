import { Injectable } from '@angular/core';
import { RecipePreview } from 'src/model/recipe-preview';
import { RecipeDetail } from 'src/model/recipe-detail';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url = environment.backendUrl+"/recipes"

  constructor(private http: HttpClient) { }

  getAllRecipePreviews(): Observable<RecipePreview[]> {
    return this.http.get<RecipePreview[]>(this.url);
  }

  getRecipeDetailById(id: number): Observable<RecipeDetail> {
    return this.http.get<RecipeDetail>(this.url+"/"+id);
  }

  saveRecipe(recipe: RecipeDetail): Observable<RecipeDetail> {
    return this.http.post<RecipeDetail>(this.url, recipe);
  }
}
