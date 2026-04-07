import { Injectable, signal } from '@angular/core';
import { createClient } from '@supabase/supabase-js'
import { environment } from '../../../environments/environment.development';



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
  fromCookBook = signal<boolean>(false);

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

