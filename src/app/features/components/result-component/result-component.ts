import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { Supabase } from '../../../core/services/supabase';


interface Recipe {
  text: string;
  time: string;
}

export interface RecipeList {
  id: number;
  created_at: string;
  recipe1: {
    titel: string;
    info_block: string;
    naehrwerte_block: string;
    directions: {
      schritte: string[];
    };
    ingredients: {
      vorhanden_liste: string[];
      fehlen_liste: string[];
    };
  };
}


@Component({
  selector: 'app-result-component',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './result-component.html',
  styleUrl: './result-component.scss',
})


export class ResultComponent {
  selectableDishes: Recipe[] = [



  ];
  recipeList: Recipe[] = [
    {
      text: "this.selectableDishes.length",
      time: "20",
    },
    {
      text: "Creamy garlic shrimp pasta",
      time: "22",
    },
    {
      text: "Pasta alla trapanese (Sicilian Tomato Pesto)",
      time: "40",
    },
  ];

  constructor(private supabase: Supabase) { }

  async ngOnInit() {
    let products = await this.supabase.selectedRecipe();
    
  }



}
