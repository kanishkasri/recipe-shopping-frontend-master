import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/recipe.service';



@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent implements OnInit {

  recipe: Recipe = new Recipe();
  submitted = false;



  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
  }

  createRecipe() {
    this.recipeService.saveRecipe(this.recipe).subscribe(data =>{
        console.log(data)}, error=>console.log(error));
        this.recipe = new Recipe();
        this.goToRecipeList();

  }

  onSubmit(){
    this.submitted = true;
    this.createRecipe();
  }

  goToRecipeList(){
    this.router.navigate(['/recipes']);
    
  }

}
