import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-component',
  imports: [FormsModule],
  templateUrl: './recipe-component.html',
  styleUrl: './recipe-component.scss',
})
export class RecipeComponent {
  amount: number = 100;
  unit: string = 'gram';

saveData() {
  console.log(`Gespeichert: ${this.amount} ${this.unit}`);
}

}
