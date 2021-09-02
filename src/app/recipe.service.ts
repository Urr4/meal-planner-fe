import { Injectable } from '@angular/core';
import { RecipePreview } from 'src/model/recipe-preview';
import { RecipeDetail } from 'src/model/recipe-detail';
import { UpdateRecipeRequest } from 'src/model/update-recipe-request';
import { CreateRecipeRequest } from 'src/model/create-recipe-request';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url = environment.backendUrl+"/recipes"

  constructor(private http: HttpClient) { }

  getAllRecipePreviews(): Observable<RecipePreview[]> {
    return this.http
      .get<RecipePreview[]>(this.url);
  }

  getRecipeDetailById(id: number): Observable<RecipeDetail> {
    return this.http.get<RecipeDetail>(this.url+"/"+id);
  }

  createRecipe(createRecipeRequest: CreateRecipeRequest): Observable<RecipeDetail> {
    return this.http.post<RecipeDetail>(this.url, createRecipeRequest);
  }

  updateRecipe(updateRecipeRequest: UpdateRecipeRequest): Observable<RecipeDetail> {
    return this.http.put<RecipeDetail>(this.url, updateRecipeRequest);
  }
}
