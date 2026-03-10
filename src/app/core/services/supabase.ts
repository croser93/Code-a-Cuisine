import { Injectable, signal } from '@angular/core';
import { createClient } from '@supabase/supabase-js'
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
supabaseUrl = environment.supabaseUrl
supabaseKey = environment.supabaseKey
supabase = createClient(this.supabaseUrl, this.supabaseKey)

ingredientsAndPreferences = signal<{id:number, created_at:string, Name:string}[]> ([])

async getProducts(){
let { data: products, error } = await this.supabase
  .from('Ingredients and Preferences')
  .select('*')
  if(!products) return
  this.ingredientsAndPreferences.set(products)
}
  
}
