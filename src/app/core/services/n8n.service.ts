import { Injectable, signal } from '@angular/core';


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

  async pushData(preferences: UserPreferences) {
  const combinedData = {
    ingredients: this.currentIngredients,
    portions: preferences.portions,
    person: preferences.person,
    selectedCookingTime: preferences.selectedCookingTime,
    selectedCuisines: preferences.selectedCuisines,
    selectedDietPreference: preferences.selectedDietPreference
  };

  console.log('Sending to n8n:', combinedData);
  this.loadingScreen.set(true)
  try {
    const response = await fetch(
      'http://localhost:5678/webhook-test/0236c66a-d4c3-4216-9e1c-79a8437f952a',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(combinedData)
    }
    );
    

    if (!response.ok) {
      throw new Error(`Webhook error: ${response.status} ${response.statusText}`);
    }


    const result = await response.json();
    if (result) {
        this.recipeResult.set(result);
        console.log(this.recipeResult());
        this.loadingScreen.set(false);
    } else
        console.log('no results')


  } catch (error) {
    console.error('Failed to reach n8n webhook:', error);
    this.loadingScreen.set(false);
    throw error;
  }
  }
}



