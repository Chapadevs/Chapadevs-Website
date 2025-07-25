import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  standalone: true,
  template: `
    <section class="support-section">
      <header class="section-header">
        <span class="section-badge">Post-Launch Support</span>
        <h2 class="section-title">We Don't Just Build – We Maintain</h2>
        <p class="section-description">
          Your website launch is just the beginning. We provide comprehensive follow-up and ongoing maintenance to ensure your application stays secure, fast, and up-to-date.
        </p>
      </header>
      <div class="support-features">
        <article class="support-feature">
          <span class="feature-icon">🕒</span>
          <div class="feature-content">
            <h3>24/7 Monitoring</h3>
            <p>Proactive issue detection and instant alerts to keep your website running smoothly.</p>
          </div>
        </article>
        <article class="support-feature">
          <span class="feature-icon">🔄</span>
          <div class="feature-content">
            <h3>Monthly Updates</h3>
            <p>Security patches and performance optimizations to keep your site fast and secure.</p>
          </div>
        </article>
        <article class="support-feature">
          <span class="feature-icon">💬</span>
          <div class="feature-content">
            <h3>Priority Support</h3>
            <p>Direct access via Notion and email with response times under 2 hours.</p>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .support-section {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      padding: 80px 0;
    }
    .support-features {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    .support-feature {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 2rem;
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.03), rgba(16, 185, 129, 0.06));
      border-radius: 16px;
      border: 1px solid rgba(16, 185, 129, 0.1);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .feature-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #10b981, #059669);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: white;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
      transition: all 0.3s ease;
      flex-shrink: 0;
      position: relative;
      z-index: 2;
    }
    .feature-content h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.5rem;
    }
    .feature-content p {
      color: #64748b;
      line-height: 1.6;
      font-size: 0.95rem;
    }
    @media (max-width: 768px) {
      .support-features {
        gap: 1.25rem;
      }
      .support-feature {
        padding: 1.5rem;
        gap: 1.5rem;
      }
      .feature-icon {
        width: 50px;
        height: 50px;
        font-size: 1.25rem;
      }
    }
    @media (max-width: 480px) {
      .support-feature {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
        padding: 1.25rem;
      }
      .feature-icon {
        align-self: center;
      }
    }
  `]
})
export class SupportComponent {} 