import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  id: number;
  recipe: Recipe;
  

  constructor(private route: ActivatedRoute, private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit(): void {    
    this.recipe = new Recipe();
    this.id = this.route.snapshot.params['id'];
    this.getRecipeDetails();
  }

  getRecipeDetails() {
    this.recipeService.getRecipeDetails(this.id).subscribe((data: any) => {
      console.log(data), this.recipe = data
    }, error => console.log(error));
  }

  goToRecipeList() {
    this.router.navigate(['/recipes']);
  }



}
