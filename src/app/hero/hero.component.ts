import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero-section">
      <main class="hero-main">
        <h1 class="hero-title">
          Your Digital Vision, <span class="text-green">OUR CODE</span>
        </h1>
        <p class="hero-description">
          We turn your business ideas into powerful web applications with modern technology and professional development practices.
        </p>
        <div class="hero-buttons">
          <button class="btn btn-primary" (click)="scrollToInquiryForm()">Start Your Project <span class="arrow">→</span></button>
          <button class="btn btn-outline" (click)="goToPortfolio()">View Our Work</button>
        </div>
      </main>
    </section>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%);
      min-height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 60px 0 40px 0;
    }
    .hero-main {
      max-width: 700px;
      margin: 0 auto;
      text-align: center;
    }
    .hero-title {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }
    .hero-description {
      font-size: 1.25rem;
      color: #6b7280;
      margin-bottom: 2rem;
    }
    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    @media (max-width: 768px) {
      .hero-title { font-size: 2rem; }
      .hero-buttons { flex-direction: column; }
    }
  `]
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