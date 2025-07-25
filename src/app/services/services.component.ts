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
          From concept to deployment, we provide comprehensive web development services tailored to your business needs.
        </p>
      </header>
      <div class="services-grid">
        <article class="service-card">
          <div class="service-icon">💻</div>
          <h3>Full-Stack Web Applications</h3>
          <p>Complete web solutions from frontend to backend, built with modern technologies for scalability and performance.</p>
          <ul class="service-list">
            <li>Angular & TypeScript</li>
            <li>Java Spring Boot</li>
            <li>PostgreSQL Database</li>
            <li>Oracle Cloud Infrastructure</li>
          </ul>
        </article>
        <article class="service-card">
          <div class="service-icon">💜</div>
          <h3>Modern Frontend Development</h3>
          <p>Beautiful, responsive user interfaces built with cutting-edge frameworks and best practices.</p>
          <ul class="service-list">
            <li>Angular & SCSS</li>
            <li>Responsive Design</li>
            <li>UI/UX Optimization</li>
            <li>Progressive Web Apps</li>
          </ul>
        </article>
        <article class="service-card">
          <div class="service-icon">🛠️</div>
          <h3>Ongoing Maintenance & Support</h3>
          <p>Continuous application monitoring, updates, and support with flexible monthly payment plans.</p>
          <ul class="service-list">
            <li>24/7 Application Monitoring</li>
            <li>Regular Updates & Patches</li>
            <li>Performance Optimization</li>
          </ul>
        </article>
        <article class="service-card">
          <div class="service-icon">📱</div>
          <h3>Mobile-First Responsive Design</h3>
          <p>Websites that work flawlessly across all devices, from smartphones to desktop computers.</p>
          <ul class="service-list">
            <li>Mobile Optimization</li>
            <li>Touch-Friendly Interfaces</li>
            <li>Cross-Browser Compatible</li>
            <li>Fast Loading Times</li>
          </ul>
        </article>
        <article class="service-card">
          <div class="service-icon">🎨</div>
          <h3>Complete Brand Identity & Design</h3>
          <p>Full branding assistance from concept to execution. We create cohesive brand experiences that stand out.</p>
          <ul class="service-list">
            <li>Logo Design & Brand Identity</li>
            <li>Color Schemes & Typography</li>
            <li>Business Cards & Stationery</li>
          </ul>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .services-section {
      background: #f9fafb;
      padding: 80px 0;
    }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .service-card {
      background: white;
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      text-align: center;
      transition: all 0.3s ease;
    }
    .service-icon {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      border-radius: 12px;
      margin: 0 auto 1.5rem auto;
      background: #ecfdf5;
      color: #10b981;
    }
    .service-card h3 {
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    .service-card p {
      color: #6b7280;
      margin-bottom: 1.5rem;
      font-size: 1rem;
    }
    .service-list {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
      padding: 0;
      margin: 0;
    }
    .service-list li {
      background: #ecfdf5;
      color: #10b981;
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 0.9rem;
      font-weight: 500;
    }
  `]
})
export class ServicesComponent {} 