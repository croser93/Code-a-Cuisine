import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface Cookingtext {
  overhead: string;
  text: string;
}

interface Ingredient {
  size: string;
  text: string;
}

interface RecipeIngredients {
  yourIngredients?: Ingredient[];
  extraIngredients?: Ingredient[];
}



@Component({
  selector: 'app-cooking-templat-component',
  imports: [FormsModule, CommonModule,],
  templateUrl: './cooking-templat-component.html',
  styleUrl: './cooking-templat-component.scss',
})
export class CookingTemplatComponent {
  CookingtextList: Cookingtext[] = [
    {overhead: "Cook the pasta",   
      text: "Cook your noodles in boiling, salted water, until the pasta is al dente. Drain the pasta and reserve some of the pasta water.",     
  },
      {overhead: "Make the sauce",   
      text: "While the pasta is cooking, heat olive oil in a pan over medium heat. Add the garlic, and sauté until it starts to turn golden. Add the tomatoes, oregano, salt, and pepper, and cook for 3-4 minutes.",     
  },
      {overhead: "Finish the pasta",   
      text: "Add the noodles to the sauce, then add pasta water until the sauce is the right consistency. Simmer for 1 minute, then add the spinach, basil, chili flakes, and parmesan.",     
  },
  {overhead: "Make the sauce",   
      text: "Lower the heat to low, stir until mixed, and remove from the heat. Season to taste, top with parmesan cheese, and enjoy. ",     
  },
  ];

  cookingIngredientList: RecipeIngredients = {
  yourIngredients: [
    { size: "80g", text: "Pasta noodles" },
    { size: "100g", text: "Baby spinach" },
    { size: "150g", text: "Cherry tomatoes" },
    { size: "1 piece", text: "Egg" }
  ],
  extraIngredients: [
    { size: "40g", text: "Parmesan cheese" },
    { size: "30ml", text: "Olive oil" }
  ]
};

}
