import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface Ingredient {
  value: string;
  size: number;
  unit: string;
}

@Component({
  selector: 'app-recipe-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recipe-component.html',
  styleUrl: './recipe-component.scss',
})
export class RecipeComponent {
  amount: number = 100;
  unit: string = 'gram';
  value: string = '';

  ingredientsList: Ingredient[] = [
    {value: "Wurst",   
      size: 100,     
      unit: "g"  },
  ];

  saveIngredient() {
    const newIngredient: Ingredient = {
      value: this.value,   
      size: this.amount,     
      unit: this.unit        
    };
    if (this.value.length > 0 && this.amount > 0) {
      this.ingredientsList.push(newIngredient);
      this.value = ''; 
    }
    
    console.log('Liste aktuell:', this.ingredientsList);
  }

  deleteIngredient(i:number) {
    this.ingredientsList.splice(i, 1);

  }
}