import { Injectable, signal } from '@angular/core';
import { ErrorService, ErrorType } from './error.service';
import { environment } from '../../../environments/environment.development';

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
  n8nWebhookURL = environment.n8nWebhookURL;

  currentIngredients: Ingredient[] = [];
  recipeResult = signal<any>(null);
  loadingScreen = signal<boolean>(false);

  constructor(private errorService: ErrorService) {}

  setData(preferences: UserPreferences){
      const combinedData = {
      ingredients: this.currentIngredients,
      portions: preferences.portions,
      person: preferences.person,
      selectedCookingTime: preferences.selectedCookingTime,
      selectedCuisines: preferences.selectedCuisines,
      selectedDietPreference: preferences.selectedDietPreference,
    };
    return combinedData;
  }

  async pushData(preferences: UserPreferences) {
    this.loadingScreen.set(true);
    this.errorService.clearError();

    try {
      const response = await fetch(
        this.n8nWebhookURL,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.setData(preferences)),
        }
      );
      const result = await response.json();
      const n8nErrorType = this.errorService.parseN8nError(result);

      if (!response.ok) 
        this.badRequest();

      else if (n8nErrorType) 
        this.n8nErrorTrigger(n8nErrorType);
      
      else if (result) 
        this.goodRequest(result);  
    } 
    catch {
        this.catchError();
    }
  }

  badRequest(){
    this.recipeResult.set(null);
    this.errorService.setError('connection');
    this.loadingScreen.set(false);
    return;
  }

  n8nErrorTrigger(n8nErrorType: ErrorType){
    this.recipeResult.set(null);
    this.errorService.setError(n8nErrorType);
    this.loadingScreen.set(false);
    return;
  }

  goodRequest(result: string){
      this.recipeResult.set(result);
      this.loadingScreen.set(false);
      this.removeLocalStorage();
  }

  catchError(){
      this.recipeResult.set(null);
      this.errorService.setError('connection');
      this.loadingScreen.set(false);}
  
  removeLocalStorage(){
        const keysToRemove = ['ingredientsAtLocalStorage', 'portions', 'person', 'cookingTimeLocalStorage', 'cuisineLocalStorage', 'dietLocalStorage'];
        keysToRemove.forEach(key => localStorage.removeItem(key));
  }
}


