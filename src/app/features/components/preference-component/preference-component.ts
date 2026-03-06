import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Cookingtime {
  time: string;
  value: string;
}
interface Cuisine {
country: string;

}
interface DietPreferences {
  diet: string;
}

@Component({
  selector: 'app-preference-component',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './preference-component.html',
  styleUrl: './preference-component.scss',
})
export class PreferenceComponent {
  portions: number = 1;
  person: number = 1;

  addedMore(type: 'portions' | 'person') {
    if(this[type] >= 1 && this[type] <= 19)
    this[type]++;
  }
  
  fewer(type: 'portions' | 'person'){
    if(this[type] > 1)
      this[type]--;
  }

  cookingTimeList: Cookingtime[] = [
    {time: "Quick",   
      value: "ab to 20min",     
      },
     {time: "Medium",   
      value: "25 - 40min",     
      },
     {time: "Complex",   
      value: "over 45min",     
      },
  ];

  cuisineList: Cuisine[] = [
    {country: "German"},
    {country: "Italian"},
    {country: "Indian"},
    {country: "Japanese"},
    {country: "Gourmet"},
    {country: "Fusion"}
  ];

    dietPreferencesList: DietPreferences[] = [
    {diet: "Vegetarian"},
    {diet: "Vegan"},
    {diet: "Keto"},
    {diet: "No preferences"}
  ]

  

}
