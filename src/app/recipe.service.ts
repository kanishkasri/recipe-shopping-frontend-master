import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = 'http://localhost:8181/recipeApplication/api';

  constructor(private http: HttpClient) { }

  getRecipeList(): Observable<any>{
    return this.http.get(this.baseUrl+'/recipes');
  }

  saveRecipe(recipe: Recipe): Observable<Object>{
    return this.http.post(this.baseUrl+'/saveRecipe', recipe);
  }

  getRecipeDetails(id: number): Observable<Object>{
    return this.http.get(this.baseUrl+'/getDetails/'+id);
  }
}
