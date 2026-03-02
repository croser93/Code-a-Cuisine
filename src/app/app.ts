import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './features/components/hero-component/hero-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('codecuisine');
}
