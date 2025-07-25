import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="contact-section">
      <header class="section-header">
        <span class="section-badge">Get in Touch</span>
        <h2 class="section-title">Let's Build Together</h2>
        <p class="section-description">
          Ready to transform your ideas into reality? We'd love to hear about your project and discuss how we can help you succeed.
        </p>
      </header>
      <div class="contact-content">
        <form class="contact-form" autocomplete="off">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div class="form-group">
            <label for="company">Company/Organization</label>
            <input id="company" name="company" type="text" />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button class="btn btn-primary" type="submit">Send Message</button>
        </form>
        <aside class="contact-info">
          <div class="info-card">
            <strong>Email Us</strong>
            <p>contact@chapadevs.com</p>
          </div>
          <div class="info-card">
            <strong>Call Us</strong>
            <p>+1 (862) 225 8562</p>
          </div>
          <div class="info-card">
            <strong>Location</strong>
            <p>Remote Team • Worldwide</p>
          </div>
        </aside>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background: #fff;
      padding: 80px 0;
    }
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      max-width: 1100px;
      margin: 0 auto;
      align-items: start;
    }
    .contact-form {
      background: #f9fafb;
      padding: 2.5rem;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .form-group label {
      font-weight: 600;
      color: #1f2937;
    }
    .form-group input,
    .form-group textarea {
      padding: 12px 16px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 1rem;
      background: #fff;
      transition: border-color 0.3s;
    }
    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #10b981;
    }
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .info-card {
      background: #ecfdf5;
      color: #10b981;
      padding: 1.5rem;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 500;
    }
    @media (max-width: 900px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
  `]
})
export class ContactComponent {} 