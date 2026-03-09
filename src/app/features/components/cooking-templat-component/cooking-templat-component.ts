import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface InfoItem {
  time?: string;
  diet?: string;
  cookingtime?: string;
  likes?: number;
  poeple: number;
}

interface NutriItem {
  energie?: string;
  protein?: string;
  fat?: string;
  carbs?: string;
}

interface Ingredient {
  size: string;
  text: string;
}

interface CookingStep {
  overhead: string;
  step: string;
}

interface RecipeIngredients {
  info: InfoItem;
  nutriInfo: NutriItem;
  yourIngredients: Ingredient[];
  extraIngredients: Ingredient[];
  CookingtextList: CookingStep[];
}



@Component({
  selector: 'app-cooking-templat-component',
  imports: [FormsModule, CommonModule,],
  templateUrl: './cooking-templat-component.html',
  styleUrl: './cooking-templat-component.scss',
})
export class CookingTemplatComponent {

cookingIngredientList: RecipeIngredients = {
  info: {
    time: "20",
    diet: "vegetarian" ,
    cookingtime: "quick" ,
    likes: 2 ,
    poeple: 2,
  },

  nutriInfo: {
     energie: "80kcal" ,
     protein: "100g" ,
     fat: "150g" ,
     carbs: "100g" 
  },

  yourIngredients: [
    { size: "80g", text: "Pasta noodles" },
    { size: "100g", text: "Baby spinach" },
    { size: "150g", text: "Cherry tomatoes" },
    { size: "1 piece", text: "Egg" }
  ],

  extraIngredients: [
    { size: "40g", text: "Parmesan cheese" },
    { size: "30ml", text: "Olive oil" },
  ],

  CookingtextList: [
    {
      overhead: "Cook the pasta",
      step: "Cook your noodles in boiling, salted water, until the pasta is al dente. Drain the pasta and reserve some of the pasta water."
    },
    {
      overhead: "Make the sauce",
      step: "While the pasta is cooking, heat olive oil in a pan over medium heat. Add the garlic, and sauté until it starts to turn golden. Add the tomatoes, oregano, salt, and pepper, and cook for 3-4 minutes."
    },
    {
      overhead: "Finish the pasta",
      step: "Add the noodles to the sauce, then add pasta water until the sauce is the right consistency. Simmer for 1 minute, then add the spinach, basil, chili flakes, and parmesan."
    },
    {
      overhead: "Serve",
      step: "Lower the heat to low, stir until mixed, and remove from the heat. Season to taste, top with parmesan cheese, and enjoy."
    }
  ]
};
}
