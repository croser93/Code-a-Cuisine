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
  supabaseUrl = environment.supabaseUrl;
  supabaseKey = environment.supabaseKey;
  supabase = createClient(this.supabaseUrl, this.supabaseKey);


  ingredientsAndPreferences = signal<{ id: number, created_at: string, Name: string }[]>([])
  
  recipeData = signal<any[]>([]);
  cookbookData = signal<any[]>([]);
  counter = signal<number>(0);
  currentSelectedRecipe: any = null;

  currentIngredients: Ingredient[] = [];

  async selectedRecipe() {
    let { data: products, error } = await this.supabase
      .from('selection Recipe')
      .select('*')
      .order('id', { ascending: false })
      .limit(1);

    if (!products) return
    this.recipeData.set(products);
    return products
  }



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

    async fetchCookbookList(cuisine: string, page: number = 0){
    const pageSize = 15;
    const start = page * pageSize;
    const end = start + pageSize - 1;

    let { data: products, count, error } = await this.supabase
      .from('Cookbook')
      .select('*', { count: 'exact' })
      .in('selectedCuisines', [cuisine])
      .range(start, end)
    
    if (error){
      console.error('fetchtError' + error)
    }

    if (!products) 
      return
    this.cookbookData.set(products);
    this.counter.set(count ?? 0);
    return products
  }

}

