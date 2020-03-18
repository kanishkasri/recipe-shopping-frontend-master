import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/recipe.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Observable<Recipe[]>;

  showItem = false;
  

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList(){
    this.recipes = this.recipeService.getRecipeList();
  }

  deleteRecipe(id: number){
  
  }

  updateRecipe(id: number){

  }

  recipeDetails(id: number){
    this.router.navigate(['/details', id]);
  }

  addRecipe(){
    this.router.navigate(['/add']);
  }

  
}
