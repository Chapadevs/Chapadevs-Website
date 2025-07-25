import { Component } from '@angular/core';

@Component({
  selector: 'app-transparency',
  standalone: true,
  template: `
    <section class="transparency-section">
      <header class="section-header">
        <span class="section-badge">Transparency</span>
        <h2 class="section-title">We Keep You in the Loop</h2>
        <p class="section-description">
          No black boxes here. We believe in complete transparency and client involvement throughout your project development.
        </p>
      </header>
      <div class="transparency-grid">
        <article class="transparency-card">
          <div class="transparency-icon">📊</div>
          <h3>Live Project Dashboard</h3>
          <p>Track your project's progress in real-time with our custom client portal. See exactly what we're working on, when it'll be done, and what's coming next.</p>
        </article>
        <article class="transparency-card">
          <div class="transparency-icon">🖥️</div>
          <h3>See Your Code in Action</h3>
          <p>Preview your website at every stage of development. No waiting until the end—you'll see your vision come to life step by step.</p>
        </article>
        <article class="transparency-card">
          <div class="transparency-icon">💬</div>
          <h3>Direct Communication</h3>
          <p>No middlemen, no confusion. Chat directly with our developers, get immediate answers, and make decisions together in real-time.</p>
        </article>
      </div>
      <div class="transparency-guarantee">
        <div class="guarantee-content">
          <h3>Our Transparency Guarantee</h3>
          <p>We're so confident in our transparent approach that we offer a simple promise:</p>
          <div class="guarantee-box">
            <span class="guarantee-icon">🛡️</span>
            <div class="guarantee-text">
              <h4>If you're ever left in the dark about your project's progress, timeline, or costs – we'll give you a full refund, no questions asked.</h4>
              <p>That's how committed we are to keeping you informed every step of the way.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .transparency-section {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      padding: 80px 0;
    }
    .transparency-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      max-width: 1100px;
      margin: 0 auto 3rem auto;
    }
    .transparency-card {
      background: white;
      border-radius: 16px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
      padding: 2rem;
      text-align: center;
    }
    .transparency-icon {
      font-size: 2rem;
      margin-bottom: 1rem;
      display: block;
    }
    .transparency-guarantee {
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.1));
      border: 2px solid rgba(16, 185, 129, 0.2);
      border-radius: 24px;
      padding: 3rem;
      max-width: 900px;
      margin: 0 auto;
    }
    .guarantee-content h3 {
      font-size: 2rem;
      font-family: 'Code Bold', Arial, Helvetica, sans-serif;
      color: #1e293b;
      margin-bottom: 1rem;
      text-align: center;
    }
    .guarantee-content > p {
      font-size: 1.1rem;
      color: #64748b;
      text-align: center;
      margin-bottom: 2rem;
    }
    .guarantee-box {
      background: rgba(255, 255, 255, 0.9);
      border: 2px solid rgba(16, 185, 129, 0.3);
      border-radius: 20px;
      padding: 2rem;
      margin-bottom: 2rem;
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
      border-top: 4px solid #10b981;
    }
    .guarantee-icon {
      font-size: 2.5rem;
      flex-shrink: 0;
    }
    .guarantee-text h4 {
      font-size: 1.3rem;
      color: #1e293b;
      margin-bottom: 0.5rem;
      line-height: 1.4;
    }
    .guarantee-text p {
      color: #64748b;
      font-size: 1rem;
      line-height: 1.6;
    }
  `]
})
export class TransparencyComponent {} 