import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { Supabase } from '../../../core/services/supabase';


interface Recipe {
  text: string;
  time: string;
}

@Component({
  selector: 'app-result-component',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './result-component.html',
  styleUrl: './result-component.scss',
})


export class ResultComponent implements OnInit {
  recipeList: Recipe[] = [];


  constructor(private supabase: Supabase) { }

    async ngOnInit() {
    const data = this.supabase.recipeData();
    if (data.length > 0) {
      this.recipeList = [
        {
          text: data[0].recipe1.titel,
          time: data[0].recipe1.info.time,
        },
        {
          text: data[0].recipe2.titel,
          time: data[0].recipe2.info.time,
        },
        {
          text: data[0].recipe3.titel,
          time: data[0].recipe3.info.time,
        },
  ];
}}

}
