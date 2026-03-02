import { Routes } from '@angular/router';
import { HeroComponent } from './features/components/hero-component/hero-component';
import { RecipeComponent } from './features/components/recipe-component/recipe-component';
import { PreferenceComponent } from './features/components/preference-component/preference-component';

export const routes: Routes = [
    { path: '', component: HeroComponent },
    { path: '/recipe', component: RecipeComponent },
    { path: '/preferences', component: PreferenceComponent },
    { path: '/results', component: PreferenceComponent },
    { path: '/cookbook', component: PreferenceComponent },
    { path: '**', redirectTo: '' },
];
