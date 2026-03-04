import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Wichtig für [ngClass]
import { ThemeService} from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public themeservice = inject(ThemeService);
}
