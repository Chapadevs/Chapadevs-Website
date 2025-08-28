import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';

const routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'our-business', 
    loadComponent: () => import('./app/pages/our-business/our-business.component').then(m => m.OurBusinessComponent)
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