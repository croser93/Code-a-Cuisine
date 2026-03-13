import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Supabase } from '../../../core/services/supabase';


@Component({
  selector: 'app-cookbook-list-component',
  imports: [],
  templateUrl: './cookbook-list-component.html',
  styleUrl: './cookbook-list-component.scss',
})
export class CookbookListComponent {

  constructor(private supabase: Supabase) {};

  async ngOnInit() {
   await this.supabase.fetchCookbookList('indian');
   this.log();

  }

  log(){
    const data = this.supabase.cookbookData();
    console.log(data)
  }

}
