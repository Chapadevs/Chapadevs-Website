import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeaturesComponent } from '../features/features.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { InquiryFormComponent } from '../inquiry-form/inquiry-form.component';
import { ServicesComponent } from '../services/services.component';
import { SupportComponent } from '../support/support.component';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroComponent, TeamComponent, ServicesComponent, FeaturesComponent, SupportComponent, InquiryFormComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-team></app-team>
    <app-services></app-services>
    <app-features></app-features>
    <app-support></app-support>
    <app-inquiry-form></app-inquiry-form>
    <app-footer></app-footer>
  `
})
export class HomeComponent {} 