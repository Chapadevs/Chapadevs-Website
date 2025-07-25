import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  template: `
    <section class="features-section">
      <header class="section-header">
        <span class="section-badge">Our AI-First Approach</span>
        <h2 class="section-title">Our AI-First Approach</h2>
      </header>
      <div class="features-grid">
        <article class="feature">
          <span class="feature-icon">1</span>
          <h3>AI-Powered Analysis</h3>
          <p>We use AI to analyze your business needs, market opportunities, and technical requirements to create the most effective solution.</p>
        </article>
        <article class="feature">
          <span class="feature-icon">2</span>
          <h3>Human Expertise Direction</h3>
          <p>Our experienced developers guide AI tools to produce code, designs, and solutions that meet professional standards and your specific needs.</p>
        </article>
        <article class="feature">
          <span class="feature-icon">3</span>
          <h3>Quality Assurance</h3>
          <p>Every AI-generated component undergoes thorough human review, testing, and optimization to ensure reliability and performance.</p>
        </article>
        <article class="feature">
          <span class="feature-icon">4</span>
          <h3>Continuous Improvement</h3>
          <p>We continuously refine and improve AI implementations based on real-world performance and your evolving business needs.</p>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .features-section {
      background: #fff;
      padding: 80px 0;
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1100px;
      margin: 0 auto;
    }
    .feature {
      background: #f9fafb;
      border-radius: 16px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
      padding: 2rem;
      text-align: center;
    }
    .feature-icon {
      display: inline-block;
      background: #10b981;
      color: #fff;
      font-size: 1.5rem;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      line-height: 40px;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    .feature h3 {
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }
    .feature p {
      color: #6b7280;
      font-size: 1rem;
    }
  `]
})
export class FeaturesComponent {} 