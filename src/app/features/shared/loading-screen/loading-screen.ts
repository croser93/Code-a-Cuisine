import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-screen',
  imports: [],
  templateUrl: './loading-screen.html',
  styleUrl: './loading-screen.scss',
})
export class LoadingScreen {
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.startRedirectTimer();
  }

  startRedirectTimer() {
    setTimeout(() => {

      this.router.navigate(['/results']); 
    }, 5000);
  }


}
