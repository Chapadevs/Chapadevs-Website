import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-content">
        <span>&copy; 2025 Chapadevs. All rights reserved.</span>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #1f2937;
      color: #d1d5db;
      padding: 2rem 0 1rem;
      text-align: center;
    }
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
    }
  `]
})
export class FooterComponent {} 