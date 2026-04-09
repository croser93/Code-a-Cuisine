import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Supabase } from '../../../core/services/supabase';


@Component({
  selector: 'app-cookbook-list-component',
  imports: [RouterLink, CommonModule],
  templateUrl: './cookbook-list-component.html',
  styleUrl: './cookbook-list-component.scss',
})
export class CookbookListComponent {

  constructor(
    private supabase: Supabase, 
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef) {};

    cookbookList : any
    selectedCuisine: any
    recipeCount: any
    pageSize = 15;
    currentPage = 0;
  

  async ngOnInit() {
  this.selectedCuisine = this.route.snapshot.paramMap.get('type');
  if(this.selectedCuisine){
   await this.supabase.fetchCookbookList(this.selectedCuisine);
   this.log();
   this.cdr.detectChanges();
  }
  }

  log(){
    this.cookbookList = this.supabase.cookbookData();
    this.recipeCount = this.supabase.counter();

    console.log(this.cookbookList)
    console.log(this.supabase.counter())
  }

  selectCookbookrecipe(index: any){
    this.supabase.currentSelectedRecipe = this.cookbookList[index];
    this.supabase.fromCookBook.set(true);
    this.router.navigate(['/cooking-template']);
  }

  get totalPages(): number {
  return Math.ceil(this.recipeCount / this.pageSize);
}

async changePage(newPage: number) {
  if (newPage >= 0 && newPage < this.totalPages) {
    this.currentPage = newPage;
    await this.supabase.fetchCookbookList(this.selectedCuisine, this.currentPage);
    this.log()
    this.cdr.detectChanges();
    window.scrollTo(0, 0);
    
  }
}

}
