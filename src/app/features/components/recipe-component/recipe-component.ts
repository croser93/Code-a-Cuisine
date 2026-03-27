import { Component, HostListener, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { N8nService } from '../../../core/services/n8n.service';


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

  reverseUnitMap: { [key: string]: string } = {
  'g': 'gram',
  'ml': 'ml',
  '': 'piece'
};

  isDropdownOpen: boolean = false;
  unitOptions: string[] = ['piece', 'ml', 'gram'];


  ngOnInit(){
    const localstorage = localStorage.getItem('ingredientsAtLocalStorage')
    if (localstorage)
      this.ingredientsList = JSON.parse(localstorage) as Ingredient[]

  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectUnit(option: string) {
    this.unit = option;
    this.isDropdownOpen = false;
  }

  ingredientsList: Ingredient[] = [];

  editingIndex: number | null = null;
  isEditDropdownOpen: boolean = false;
  editingIngredient: Ingredient = { value: '', size: 0, unit: 'gram' };

  startEdit(index: number, ingredient: Ingredient) {
    this.editingIndex = index;
    this.editingIngredient = { 
        value: ingredient.value, 
        size: ingredient.size, 
        unit: this.reverseUnitMap[ingredient.unit] || 'gram'
    };
    this.isEditDropdownOpen = false;
  }

  toggleEditDropdown() {
    this.isEditDropdownOpen = !this.isEditDropdownOpen;
  }

  selectEditUnit(option: string) {
    this.editingIngredient.unit = option;
    this.isEditDropdownOpen = false;
  }

  saveEdit() {
    if (this.editingIndex !== null) {
      if (this.editingIngredient.value.length > 0 && this.editingIngredient.size > 0) {
        this.ingredientsList[this.editingIndex] = {
          value: this.editingIngredient.value,
          size: this.editingIngredient.size,
          unit: this.unitMap[this.editingIngredient.unit]
        };
      }
      this.editingIndex = null;
    }
  }

  constructor(private n8n: N8nService, private eRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.customSelectContainer')) {
      this.isDropdownOpen = false;
    }
    if (!target.closest('.customSelectColumn')) {
      this.isEditDropdownOpen = false;
    }
  }

  onlyNumbers(event: KeyboardEvent) {
  const char = event.key;

  if (!/[0-9]/.test(char)) {
    event.preventDefault();
  }
}

  saveIngredient() {
    const newIngredient: Ingredient = {
      value: this.value,
      size: this.amount,
      unit: this.unitMap[this.unit || 'gram']
    };
    if (this.value.length > 0 && this.amount > 0) {
      this.ingredientsList.push(newIngredient);
      localStorage.setItem('ingredientsAtLocalStorage', JSON.stringify(this.ingredientsList))
      console.log(this.ingredientsList)
      this.value = '';
    }
  }

  deleteIngredient(i: number) {
    this.ingredientsList.splice(i, 1);

  }

  saveToService() {
    this.n8n.currentIngredients = this.ingredientsList;
  }
}