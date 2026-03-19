import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService} from '../../../core/services/theme.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public themeservice = inject(ThemeService);
}
