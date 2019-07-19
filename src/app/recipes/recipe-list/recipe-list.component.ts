import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 
  recipes:Recipe[];
   
  constructor(private recipeSevice:RecipeService,private router:Router,private routes:ActivatedRoute) { }

  ngOnInit() {
    this.recipes=this.recipeSevice.getRecipes();
  }
  onNewRecipe()
  {
    this.router.navigate(['new'],{relativeTo:this.routes});
  }

}
