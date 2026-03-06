import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-preference-component',
  imports: [RouterLink, FormsModule],
  templateUrl: './preference-component.html',
  styleUrl: './preference-component.scss',
})
export class PreferenceComponent {
  portions: number = 5;
  person: number = 5;

  addedMore(type: 'portions' | 'person') {
    if(this[type] >= 1 && this[type] <= 19)
    this[type]++;
  }
  
  fewer(type: 'portions' | 'person'){
    if(this[type] > 1)
      this[type]--;
  }

    
  

}
