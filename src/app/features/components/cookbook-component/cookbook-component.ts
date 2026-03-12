import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Recipe {
  title: string;
  time: string;
  likes: number;
}

interface Cuisine {
  name: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-cookbook-component',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cookbook-component.html',
  styleUrl: './cookbook-component.scss',
})
export class CookbookComponent {
  topRecipes: Recipe[] = [
    { title: 'Pasta with spinach and cherry tomatoes', time: '20min', likes: 66 },
    { title: 'Low Carb Vegan No-Bake Paleo Bars', time: '35min', likes: 57 },
    { title: 'Schnitzel with fries', time: '45min', likes: 89 }
  ];

  cuisines: Cuisine[] = [
    { name: 'Italian cuisine', image: 'italian.svg', link: '#' },
    { name: 'German cuisine', image: 'german.svg', link: '#' },
    { name: 'Japanese cuisine', image: 'japanese.svg', link: '#' },
    { name: 'Gourmet cuisine', image: 'gourmet.svg', link: '#' },
    { name: 'Indian cuisine', image: 'indian.svg', link: '#' },
    { name: 'Fusion cuisine', image: 'fusion.svg', link: '#' }
  ];
}
