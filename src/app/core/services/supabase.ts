import { Injectable, signal } from '@angular/core';
import { createClient } from '@supabase/supabase-js'
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
export class Supabase {
  supabaseUrl = environment.supabaseUrl
  supabaseKey = environment.supabaseKey
  supabase = createClient(this.supabaseUrl, this.supabaseKey)

  ingredientsAndPreferences = signal<{ id: number, created_at: string, Name: string }[]>([])

  currentIngredients: Ingredient[] = [];

  // async getProducts() {
  //   let { data: products, error } = await this.supabase
  //     .from('Ingredients and Preferences')
  //     .select('*')
  //   if (!products) return
  //   this.ingredientsAndPreferences.set(products)
  // }

  async pushData(preferences: UserPreferences) {
    const combinedData = {
      ingredients: this.currentIngredients,
      portions: preferences.portions,
      person: preferences.person,
      selectedCookingTime: preferences.selectedCookingTime,
      selectedCuisines: preferences.selectedCuisines,
      selectedDietPreference: preferences.selectedDietPreference
    };
    console.log(combinedData)
    const { data, error } = await this.supabase
      .from('Ingredients and Preferences')
      .insert([
        combinedData
      ])
      .select()
  }

}
