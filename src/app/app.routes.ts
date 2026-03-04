import { Routes } from '@angular/router';
import { HeroComponent } from './features/components/hero-component/hero-component';
import { RecipeComponent } from './features/components/recipe-component/recipe-component';
import { PreferenceComponent } from './features/components/preference-component/preference-component';
import { ResultComponent } from './features/components/result-component/result-component';
import { CookbookComponent } from './features/components/cookbook-component/cookbook-component';

export const routes: Routes = [

    { path: '', component: HeroComponent, data: { theme: 'dark' } },
    { path: 'recipe', component: RecipeComponent, data: { theme: 'light' } },
    { path: 'preferences', component: PreferenceComponent },
    { path: 'results', component: ResultComponent},
    { path: 'cookbook', component: CookbookComponent},
    { path: '**', redirectTo: '' },
];
