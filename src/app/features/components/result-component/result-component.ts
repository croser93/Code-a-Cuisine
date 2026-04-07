import { Component, OnInit, ChangeDetectorRef, signal} from '@angular/core';
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
  selectedRecipe = signal<any>(null);
  constructor(private supabase: Supabase, private n8n: N8nService  ,private cdr: ChangeDetectorRef) { }

  async ngOnInit() {
    this.workUpRecipeList();
    this.cdr.detectChanges();
  }

  workUpRecipeList(){
    const signalData = this.n8n.recipeResult();
    if (Array.isArray(signalData) && signalData.length > 0) {
      this.recipeList = [signalData[0], signalData[1], signalData[2]];
      localStorage.setItem('recipes', JSON.stringify(this.recipeList));
    } else {
      const stored = localStorage.getItem('recipes');
      if (stored) {
        this.recipeList = JSON.parse(stored);
      }
    }
  }

getSelectedDish(i : number){
  this.supabase.currentSelectedRecipe = this.recipeList[i];
  console.log(this.supabase.currentSelectedRecipe);
}

}
