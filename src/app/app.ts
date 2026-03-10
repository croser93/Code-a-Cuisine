import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Header } from './features/shared/header/header';
import { Footer } from './features/shared/footer/footer';
import { ThemeService } from './core/services/theme.service';
import { filter } from 'rxjs/operators';
import { LoadingScreen } from './features/shared/loading-screen/loading-screen';
import { Supabase } from './core/services/supabase';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('codecuisine');

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private themeService = inject(ThemeService);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let route = this.activatedRoute.root;
      while (route.firstChild) {
        route = route.firstChild;
      }
      
      const theme = route.snapshot.data['theme'] || 'dark';
  
      this.themeService.currentTheme.set(theme);
    });
  }

  dbservice = inject(Supabase)
}

