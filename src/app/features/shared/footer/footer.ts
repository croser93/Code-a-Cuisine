import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService} from '../../../core/services/theme.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
    public themeservice = inject(ThemeService);

}
