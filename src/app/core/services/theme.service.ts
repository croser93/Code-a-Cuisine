import { Injectable, signal } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ThemeService {
  currentTheme = signal<'light' | 'dark'>('light');
}