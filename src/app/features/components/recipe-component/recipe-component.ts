import { Component, HostListener, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { Supabase } from '../../../core/services/supabase';


interface Ingredient {
  value: string;
  size: number;
  unit: string;
}

@Component({
  selector: 'app-recipe-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './recipe-component.html',
  styleUrl: './recipe-component.scss',
})
export class RecipeComponent {
  amount: any = '';
  unit: string = '';
  value: string = '';

  unitMap: { [key: string]: string } = {
  gram: 'g',
  ml: 'ml',
  piece: ''
};

  isDropdownOpen: boolean = false;
  unitOptions: string[] = ['piece', 'ml', 'gram'];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectUnit(option: string) {
    this.unit = option;
    this.isDropdownOpen = false;
  }

  ingredientsList: Ingredient[] = [];

  constructor(private supabase: Supabase, private eRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    // Wenn außerhalb geklickt wird, Dropdown schließen
    if (!this.eRef.nativeElement.querySelector('.customSelectContainer')?.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }

  saveIngredient() {
    const newIngredient: Ingredient = {
      value: this.value,
      size: this.amount,
      unit: this.unitMap[this.unit]
    };
    if (this.value.length > 0 && this.amount > 0) {
      this.ingredientsList.push(newIngredient);
      console.log(this.ingredientsList)
      this.value = '';
    }
  }

  deleteIngredient(i: number) {
    this.ingredientsList.splice(i, 1);

  }

  saveToService() {
    this.supabase.currentIngredients = this.ingredientsList;
  }
}