import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="title title--hero">
            Your Digital Vision, <span class="title--accent">&lt;/&gt;</span> OUR CODE
          </h1>
          <p class="text text--lead">
            We turn your business ideas into powerful web applications with speed and the control you need.
          </p>
          <div class="hero-buttons">
            <button class="btn btn--primary" (click)="scrollToInquiryForm()">
              Start Your Project <span class="btn-arrow">→</span>
            </button>
            <button class="btn btn--secondary" (click)="goToPortfolio()">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  constructor(private router: Router) {}

  scrollToInquiryForm() {
    const el = document.getElementById('inquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  goToPortfolio() {
    this.router.navigate(['/portfolio']);
  }
} 