import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

interface Recipe {
  text: string;
  time: string;
}


@Component({
  selector: 'app-result-component',
   imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './result-component.html',
  styleUrl: './result-component.scss',
})


export class ResultComponent {

   recipeList: Recipe[] = [
    {text: "pasta with spinach and cherry tomatoes",   
      time: "20",     
  },
      {text: "Creamy garlic shrimp pasta",   
      time: "22",     
  },
      {text: "Pasta alla trapanese (Sicilian Tomato Pesto)",   
      time: "40",     
  },
  ];
}
