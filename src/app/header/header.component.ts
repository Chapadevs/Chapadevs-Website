import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="main-header">
      <div class="header-content">
        <img src="assets/logos/chapadevs-logo.png" alt="Chapadevs Logo" class="header-logo" />
      </div>
    </header>
  `,
  styles: [`
    .main-header {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      position: sticky;
      top: 0;
      z-index: 100;
      height: 90px;
    }
    .header-content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .header-logo {
      height: 70px;
      width: auto;
      object-fit: contain;
    }
  `]
})
export class HeaderComponent {} 