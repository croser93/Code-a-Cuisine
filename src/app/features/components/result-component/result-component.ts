import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { Supabase } from '../../../core/services/supabase';


interface Recipe {
  titel: string;
  info: {
    time: string;
    cuisine: string;
    confidence: string;
  };
}


@Component({
  selector: 'app-result-component',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './result-component.html',
  styleUrl: './result-component.scss',
})


export class ResultComponent implements OnInit {
  recipeList: Recipe[] = [];
  selectedDish: any[] = [];
  

  constructor(private supabase: Supabase, private cdr: ChangeDetectorRef) { }

  async ngOnInit() {
   await this.supabase.selectedRecipe();
   this.workUpRecipeList()
   this.cdr.detectChanges()
  }

  workUpRecipeList(){
    const data = this.supabase.recipeData();
    if (data.length > 0){
      const entry = data[0];
      this.recipeList = [
          entry.recipe1, 
          entry.recipe2, 
          entry.recipe3
    ];
  }
}

getSelectedDish(i : number){
  console.log(i)
  this.selectedDish.push(this.recipeList[i])
}

}
