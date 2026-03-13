import { Routes } from '@angular/router';
import { HeroComponent } from './features/components/hero-component/hero-component';
import { RecipeComponent } from './features/components/recipe-component/recipe-component';
import { PreferenceComponent } from './features/components/preference-component/preference-component';
import { ResultComponent } from './features/components/result-component/result-component';
import { CookbookComponent } from './features/components/cookbook-component/cookbook-component';
import { LoadingScreen } from './features/shared/loading-screen/loading-screen';
import { CookingTemplatComponent } from './features/components/cooking-templat-component/cooking-templat-component';
import { CookbookListComponent } from './features/components/cookbook-list-component/cookbook-list-component';



export const routes: Routes = [

    { path: '', component: HeroComponent, data: { theme: 'dark' } },
    { path: 'recipe', component: RecipeComponent, data: { theme: 'light' } },
    { path: 'preferences', component: PreferenceComponent, data: { theme: 'light' } },
    { path: 'loading-screen', component: LoadingScreen, data: { theme: 'dark' } },
    { path: 'results', component: ResultComponent, data: { theme: 'light' }},
    { path: 'cooking-template', component: CookingTemplatComponent, data: { theme: 'light' }},
    { path: 'cookbook', component: CookbookComponent, data: { theme: 'light' }},
    { path: 'cookbook-list', component: CookbookListComponent, data: { theme: 'light' }},
    { path: '**', redirectTo: '' },
];
