import { Injectable } from '@angular/core';
import { Ingredient } from 'src/model/ingredient';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  url = environment.backendUrl+"/ingredients"

  constructor(private http: HttpClient) { }

  getAllIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.url);
  }
}
