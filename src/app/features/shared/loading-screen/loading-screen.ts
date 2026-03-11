import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supabase } from '../../../core/services/supabase';

@Component({
  selector: 'app-loading-screen',
  imports: [],
  templateUrl: './loading-screen.html',
  styleUrl: './loading-screen.scss',
})
export class LoadingScreen implements OnInit {
  constructor(private router: Router, private supabase: Supabase) { }

  async ngOnInit() {
    await this.supabase.selectedRecipe();
    this.startRedirectTimer();
  }

  startRedirectTimer() {
    setTimeout(() => {
      this.router.navigate(['/results']); 
    }, 5000);
  }
}
