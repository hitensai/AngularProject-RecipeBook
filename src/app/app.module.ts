import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglistEditComponent } from './shoppinglist/shoppinglist-edit/shoppinglist-edit.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipies/recipe-list/recipe-item/recipe-item.component';
import { RecipeComponent } from './recipies/recipe/recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    ShoppinglistComponent,
    ShoppinglistEditComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeComponent
   
  ],
  imports: [
    BrowserModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
