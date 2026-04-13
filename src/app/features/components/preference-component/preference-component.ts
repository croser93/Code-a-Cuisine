import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { N8nService, UserPreferences  } from '../../../core/services/n8n.service';
import { ErrorService } from '../../../core/services/error.service';

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
  portions: number = 2;
  person: number = 1;


  ngOnInit() {
    const portions = localStorage.getItem('portions');
    if (portions) this.portions = JSON.parse(portions);

    const person = localStorage.getItem('person');
    if (person) this.person = JSON.parse(person);

    const cookingTime = localStorage.getItem('cookingTimeLocalStorage');
    if (cookingTime) this.userPreferences.selectedCookingTime = JSON.parse(cookingTime);

    const cuisine = localStorage.getItem('cuisineLocalStorage');
    if (cuisine) this.userPreferences.selectedCuisines = JSON.parse(cuisine);

    const diet = localStorage.getItem('dietLocalStorage');
    if (diet) this.userPreferences.selectedDietPreference = JSON.parse(diet);
  }

  addedMore(type: 'portions' | 'person') {
    if (this[type] >= 1 && this[type] <= 3)
      this[type]++;
    else if (this.portions >= 3 && this.portions <= 11)
      this.portions++
    localStorage.setItem(type, JSON.stringify(this[type]))
  }

  fewer(type: 'portions' | 'person') {
    if (this[type] > 1)
      this[type]--;
    localStorage.setItem(type, JSON.stringify(this[type]))
  }

  cookingTimeList: Cookingtime[] = [
    {
      time: "Quick",
      value: "ab to 20min",
    },
    {
      time: "Medium",
      value: "25 - 40min",
    },
    {
      time: "Complex",
      value: "over 45min",
    },
  ];

  cuisineList: Cuisine[] = [
    { country: "German" },
    { country: "Italian" },
    { country: "Indian" },
    { country: "Japanese" },
    { country: "Gourmet" },
    { country: "Fusion" }
  ];

  dietPreferencesList: DietPreferences[] = [
    { diet: "Vegetarian" },
    { diet: "Vegan" },
    { diet: "Keto" },
    { diet: "No preferences" }
  ]

  userPreferences: UserPreferences = {
    portions: 1,
    person: 1,
    selectedCookingTime: null,
    selectedCuisines: null,
    selectedDietPreference: null
  };

  constructor(private n8n: N8nService, private router: Router, private errorService: ErrorService) { }

  isSelectionComplete() :  boolean{
  if (this.userPreferences.selectedCookingTime &&
      this.userPreferences.selectedCuisines &&
      this.userPreferences.selectedDietPreference) 
        return true
  else
    return false
  }

  selectCookingTime(time: string) {
    this.userPreferences.selectedCookingTime = time;
    localStorage.setItem('cookingTimeLocalStorage', JSON.stringify(this.userPreferences.selectedCookingTime))

  }

  selectCuisine(cuisine: string) {
    this.userPreferences.selectedCuisines = cuisine;
    localStorage.setItem('cuisineLocalStorage', JSON.stringify(this.userPreferences.selectedCuisines))
  }

  selectDietPreference(diet: string) {
    this.userPreferences.selectedDietPreference = diet;
    localStorage.setItem('dietLocalStorage', JSON.stringify(this.userPreferences.selectedDietPreference))
  }

  generateRecipe() {
    if (this.quiteEnough()) {
      this.userPreferences.portions = this.portions;
      this.userPreferences.person = this.person;
      this.n8n.pushData(this.userPreferences);
      this.router.navigate(['/loading-screen']);
    }else{
      this.router.navigate(['/loading-screen']);
    }
  }

  quiteEnough(): boolean {
    const stored = localStorage.getItem('ingredientsAtLocalStorage');
    const ingredients = stored ? JSON.parse(stored) : [];
    if (ingredients.length >= this.portions) {
      return true;
    } else {
      this.errorService.setError('quite_enough');
      return false;
    }
  }
}
