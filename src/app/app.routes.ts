import { Routes } from '@angular/router';
import { HeroComponent } from './features/components/hero-component/hero-component';
import { RecipeComponent } from './features/components/recipe-component/recipe-component';
import { PreferenceComponent } from './features/components/preference-component/preference-component';
import { ResultComponent } from './features/components/result-component/result-component';
import { CookbookComponent } from './features/components/cookbook-component/cookbook-component';
import { LoadingScreen } from './features/shared/loading-screen/loading-screen';
import { CookingTemplatComponent } from './features/components/cooking-templat-component/cooking-templat-component';
import { CookbookListComponent } from './features/components/cookbook-list-component/cookbook-list-component';
import { PrivacyPolicyComponent } from './features/components/legal-and-privacy/privacy-policy-component/privacy-policy-component';
import { LegalNoticeComponent } from './features/components/legal-and-privacy/legal-notice-component/legal-notice-component';



export const routes: Routes = [

    { path: '',
     component: HeroComponent, 
        data: { theme: 'dark',
            hideFooter: true,
        },
    },

    { path: 'recipe',
    component: RecipeComponent,
        data: { theme: 'light', 
            hideFooter: false   
        },
    },

    { path: 'preferences',
    component: PreferenceComponent,
        data: { theme: 'light',
            hideFooter: false
         } 
    },

    { path: 'loading-screen', 
    component: LoadingScreen,
        data: { theme: 'dark',
            hideFooter: true,
        } 
    },

    { path: 'results',
    component: ResultComponent,
        data: { theme: 'dark',
            hideFooter: false  
        }
    },

    { path: 'cooking-template',
    component: CookingTemplatComponent,
        data: { theme: 'light',
            hideFooter: false  
        }
    },

    { path: 'cookbook',
    component: CookbookComponent,
        data: { theme: 'light',
            hideFooter: false  
        }
    },

    { path: 'cookbook-list/:type',
    component: CookbookListComponent, 
        data: { theme: 'light',
            hideFooter: false  
        }
    },

    { path: 'privacy-policy',
     component: PrivacyPolicyComponent,
        data: { theme: 'light',
            hideFooter: false  
        }
    },

    { path: 'legal-notice',
    component: LegalNoticeComponent,
        data: { theme: 'light',
            hideFooter: false  
        }
    },

    { path: '**', redirectTo: '' },
];
