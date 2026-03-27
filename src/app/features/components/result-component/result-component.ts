import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { Supabase } from '../../../core/services/supabase';
import { N8nService } from '../../../core/services/n8n.service';


interface Recipe {
  recipe: {
    title: string;
    info: {
      time: string;
      cuisine: string;
      confidence: string;
    };
  }
  selectedCuisines: string;
  selectedDietPreference: string;
}


@Component({
  selector: 'app-result-component',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './result-component.html',
  styleUrl: './result-component.scss',
})


export class ResultComponent implements OnInit {
  recipeList: Recipe[] = [];
  constructor(private supabase: Supabase, private n8n: N8nService  ,private cdr: ChangeDetectorRef) { }

  async ngOnInit() {
    await this.supabase.selectedRecipe();
    this.workUpRecipeList();
    const data = this.n8n.recipeResult();
    if (data.length > 0) {
      localStorage.setItem('dataLocalStorage', JSON.stringify(data));
    }
    this.cdr.detectChanges();
  }

  workUpRecipeList(){
    const data = this.n8n.recipeResult();
    if (data.length > 0){
      this.recipeList = [
          data[0], 
          data[1], 
          data[2]
    ];
  }
}

getSelectedDish(i : number){
  this.supabase.currentSelectedRecipe = this.recipeList[i];
}

}
