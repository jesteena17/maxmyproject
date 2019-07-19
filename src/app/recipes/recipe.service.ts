import { Recipe } from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService
{

    recipes:Recipe[]=[
        new Recipe('burger',
        'this is burger recipe decription',
        'https://images.kglobalservices.com/www.kelloggs.ca_en/en_ca/recipe/kicrecipe-13926/recip_img-5840949_highfibreburger_2160x2160.jpg',
        [
            new Ingredient('bun',3),
            new Ingredient('cheese',4)
    ]
        ),
        new Recipe('pizza',
        'this is pizza recipe decription',
        'https://www.royalfreshpizza.com/wp-content/uploads/2018/09/pizzanew.jpeg',
        [
            new Ingredient('piza sauce',3),
            new Ingredient('salt',4)
    ]
        ),
        new Recipe('chicken 65',
        'this is checken 65 recipe decription',
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
        [
            new Ingredient('chicken',3),
            new Ingredient('onion',4)
    ]
        )
        ];

        constructor(private slService:ShoppingListService){}
        getRecipes()
        {
            return this.recipes.slice();
        }

getRecipe(index:number)
{
return this.recipes[index];
}

        addIngredientsToShoppingList(ingredients:Ingredient[])
        {
this.slService.addIngredients(ingredients);
        }
}