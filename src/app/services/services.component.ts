import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section class="services-section">
      <header class="section-header">
        <span class="section-badge">Our Services</span>
        <h2 class="section-title">What We Build</h2>
        <p class="section-description">
          From idea to live website. We handle design, development, and launch so you can focus on your business.
        </p>
      </header>
      <div class="services-grid">
        <article class="service-card">
          <div class="service-icon">🚀</div>
          <h3>Complete Launch & Setup</h3>
          <p>We launch your entire digital presence. Domain setup, hosting, and all technical details handled.</p>
          <ul class="service-list">
            <li>Domain & Hosting Setup</li>
            <li>SSL Certificates</li>
            <li>Email Configuration</li>
            <li>Analytics Integration</li>
          </ul>
        </article>
        <article class="service-card">
          <div class="service-icon">💡</div>
          <h3>Your Vision + Our Expertise</h3>
          <p>Your ideas meet our technical skills. Romano and Maxel bring your concepts to life with practical solutions.</p>
          <ul class="service-list">
            <li>Custom Design Solutions</li>
            <li>Business Logic Integration</li>
            <li>User Experience Optimization</li>
            <li>Performance Tuning</li>
          </ul>
        </article>
        <article class="service-card">
          <div class="service-icon">⚡</div>
          <h3>Rapid Deployment</h3>
          <p>No endless cycles. Smart tools and proven processes get your website live quickly without sacrificing quality.</p>
          <ul class="service-list">
            <li>24-48 Hour Delivery</li>
            <li>Quality Assurance</li>
            <li>Mobile Optimization</li>
            <li>Ongoing Support</li>
          </ul>
        </article>
      </div>
    </section>
  `,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {} 