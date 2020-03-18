import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { RecipeListComponent } from '../recipes/recipe-list/recipe-list.component';
import { CreateRecipeComponent } from '../recipes/create-recipe/create-recipe.component';
import { HeaderComponent } from '../header/header.component';
import { RecipeDetailsComponent } from '../recipes/recipe-details/recipe-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path:'recipes', component: RecipeListComponent},
  {path: 'add', component: CreateRecipeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'details/:id', component: RecipeDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  /* AppRoutingModule exports RouterModule so it will be available throughout the app. */
})
export class AppRoutingModule { }
