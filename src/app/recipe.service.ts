import { Injectable } from '@angular/core';
import { Recipe } from 'src/model/recipe';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<Recipe[]> {
    const url = environment.backendUrl;
    return this.http.get<Recipe[]>(url+"/recipes");
  }
}
