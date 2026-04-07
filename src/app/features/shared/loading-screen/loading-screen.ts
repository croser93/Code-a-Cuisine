import { Component, effect} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { N8nService } from '../../../core/services/n8n.service';
import { ErrorService } from "../../../core/services/error.service";

@Component({
  selector: 'app-loading-screen',
  imports: [RouterLink],
  templateUrl: './loading-screen.html',
  styleUrl: './loading-screen.scss',
})
export class LoadingScreen {


  constructor(private router: Router, public n8n: N8nService, public errorservice: ErrorService) {

    effect(() => {
    if (this.n8n.loadingScreen() === false && this.n8n.recipeResult() !== null) {
      this.router.navigate(['/results']);
    }
    else if (this.n8n.loadingScreen() === false && this.n8n.recipeResult() === null) {
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 8000); 
    }
  });
  }


}