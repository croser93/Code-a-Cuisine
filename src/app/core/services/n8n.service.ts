import { Injectable, signal } from '@angular/core';
import { ErrorService } from './error.service';


export interface Ingredient {
  value: string;
  size: number;
  unit: string;
}

export interface UserPreferences {
  portions: number;
  person: number;
  selectedCookingTime: string | null;
  selectedCuisines: string | null;
  selectedDietPreference: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class N8nService {
  currentIngredients: Ingredient[] = [];

  recipeResult = signal<any>(null);
  loadingScreen = signal<boolean>(false);

  constructor(private errorService: ErrorService) {}

  async pushData(preferences: UserPreferences) {
    const combinedData = {
      ingredients: this.currentIngredients,
      portions: preferences.portions,
      person: preferences.person,
      selectedCookingTime: preferences.selectedCookingTime,
      selectedCuisines: preferences.selectedCuisines,
      selectedDietPreference: preferences.selectedDietPreference,
    };

    this.loadingScreen.set(true);
    this.errorService.clearError();

    try {
      const response = await fetch(
        'http://localhost:5678/webhook-test/0236c66a-d4c3-4216-9e1c-79a8437f952a',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(combinedData),
        }
      );

      if (!response.ok) {
        this.errorService.setError('connection');
        this.loadingScreen.set(false);
        return;
      }

      const result = await response.json();
      const n8nErrorType = this.errorService.parseN8nError(result);
      if (n8nErrorType) {
        this.errorService.setError(n8nErrorType);
        this.loadingScreen.set(false);
        return;
      }

      if (result) {
        this.recipeResult.set(result);
        this.loadingScreen.set(false);
        this.removeLocalStorage();
      }
    } catch {
      this.errorService.setError('connection');
      this.loadingScreen.set(false);
    }
  }
  
  removeLocalStorage(){
        const keysToRemove = ['ingredientsAtLocalStorage', 'portions', 'person', 'cookingTimeLocalStorage', 'cuisineLocalStorage', 'dietLocalStorage'];
        keysToRemove.forEach(key => localStorage.removeItem(key));
  }
}


