import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Supabase } from '../../../core/services/supabase';


@Component({
  selector: 'app-cookbook-list-component',
  imports: [RouterLink, CommonModule],
  templateUrl: './cookbook-list-component.html',
  styleUrl: './cookbook-list-component.scss',
})
export class CookbookListComponent {
  dummyRecipes = Array.from({ length: 15 }, (_, i) => ({
    vegetarian: i % 3 === 0,
    quick: true
  }));

  constructor(private supabase: Supabase, private route: ActivatedRoute) {};
  cookbookList : any

  async ngOnInit() {
  const cuisineFromUrl = this.route.snapshot.paramMap.get('type');
  if(cuisineFromUrl){
   await this.supabase.fetchCookbookList(cuisineFromUrl);
   this.log();
  }
  }

  log(){
    this.cookbookList = this.supabase.cookbookData();
    console.log(this.cookbookList)
  }

}
