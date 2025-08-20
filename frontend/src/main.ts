import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';

const routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'our-services', 
    loadComponent: () => import('./app/pages/our-services/our-services.component').then(m => m.OurServicesComponent)
  },
  { 
    path: 'our-work', 
    loadComponent: () => import('./app/pages/our-work/our-work.component').then(m => m.WorkComponent)
  },
  { 
    path: 'team', 
    loadComponent: () => import('./app/pages/team/team.component').then(m => m.TeamComponent)
  },
  { 
    path: 'ai', 
    loadComponent: () => import('./app/pages/ai/ai.component').then(m => m.AiComponent)
  },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
})
  .catch(err => console.error(err)); 