import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FeaturesComponent } from '../features/features.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { InquiryFormComponent } from '../inquiry-form/inquiry-form.component';
import { ServicesComponent } from '../services/services.component';
import { SupportComponent } from '../support/support.component';
import { TeamComponent } from '../team/team.component';
import { TransparencyComponent } from '../transparency/transparency.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroComponent, TeamComponent, FeaturesComponent, ServicesComponent, TransparencyComponent, SupportComponent, InquiryFormComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-team></app-team>
    <app-features></app-features>
    <app-services></app-services>
    <app-transparency></app-transparency>
    <app-support></app-support>
    <app-inquiry-form></app-inquiry-form>
    <app-footer></app-footer>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
} 