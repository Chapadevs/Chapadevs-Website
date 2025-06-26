import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-website-mockup',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="website-mockup">
      <div class="mockup-browser">
        <div class="browser-bar">
          <div class="browser-dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="url-bar">{{ getUrl() }}</div>
        </div>
        <div class="website-content" [ngClass]="getClass()">
          <ng-container [ngSwitch]="projectId">
            
            <!-- E-commerce -->
            <div *ngSwitchCase="1">
              <header class="site-header">
                <div class="logo">TechCorp</div>
                <nav class="main-nav">
                  <span>Products</span>
                  <span>Categories</span>
                  <span>Cart (3)</span>
                </nav>
              </header>
              <div class="hero-banner">
                <h1>Latest Tech Gadgets</h1>
                <p>30% OFF Black Friday Sale</p>
                <button class="cta-btn">Shop Now</button>
              </div>
              <div class="product-grid">
                <div class="product-card">
                  <div class="product-img"></div>
                  <h3>Smart Watch Pro</h3>
                  <span class="price">$299</span>
                </div>
                <div class="product-card">
                  <div class="product-img"></div>
                  <h3>Wireless Earbuds</h3>
                  <span class="price">$149</span>
                </div>
                <div class="product-card">
                  <div class="product-img"></div>
                  <h3>Gaming Laptop</h3>
                  <span class="price">$1,299</span>
                </div>
              </div>
            </div>

            <!-- Healthcare -->
            <div *ngSwitchCase="2" class="healthcare-layout">
              <div class="app-sidebar">
                <div class="logo">MedFlow</div>
                <div class="nav-item active">Dashboard</div>
                <div class="nav-item">Patients</div>
                <div class="nav-item">Appointments</div>
              </div>
              <div class="app-main">
                <div class="app-header">
                  <h2>Patient Dashboard</h2>
                  <div class="user-info">Dr. Sarah Johnson</div>
                </div>
                <div class="stats-row">
                  <div class="stat-card">
                    <span class="stat-number">247</span>
                    <span class="stat-label">Patients Today</span>
                  </div>
                  <div class="stat-card">
                    <span class="stat-number">32</span>
                    <span class="stat-label">Appointments</span>
                  </div>
                </div>
                <div class="patient-list">
                  <div class="patient-row">
                    <span class="patient-name">John Smith</span>
                    <span class="status urgent">Urgent</span>
                  </div>
                  <div class="patient-row">
                    <span class="patient-name">Mary Johnson</span>
                    <span class="status routine">Routine</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Corporate -->
            <div *ngSwitchCase="3">
              <header class="corporate-header">
                <div class="corp-logo">Global Finance</div>
                <nav class="corp-nav">
                  <span>Services</span>
                  <span>Markets</span>
                  <span>About</span>
                </nav>
              </header>
              <div class="corporate-hero">
                <h1>Financial Excellence Since 1985</h1>
                <p>Trusted by over 10,000 clients worldwide</p>
              </div>
              <div class="dashboard-preview">
                <div class="charts-row">
                  <div class="chart-widget">
                    <div class="chart-line"></div>
                    <span>S&P 500: +2.3%</span>
                  </div>
                  <div class="chart-widget">
                    <div class="chart-bar"></div>
                    <span>Portfolio: +15.8%</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sustainability -->
            <div *ngSwitchCase="4">
              <header class="eco-header">
                <div class="eco-logo">🌱 EcoTrack</div>
                <div class="co2-display">CO₂ Saved: 2.3 tons</div>
              </header>
              <div class="eco-dashboard">
                <div class="metric-grid">
                  <div class="eco-metric">
                    <span class="metric-value">45%</span>
                    <span class="metric-label">Carbon Reduction</span>
                  </div>
                  <div class="eco-metric">
                    <span class="metric-value">1,247</span>
                    <span class="metric-label">Trees Equivalent</span>
                  </div>
                </div>
                <div class="sensor-map">
                  <div class="map-area">
                    <div class="sensor-dot" style="top: 30%; left: 20%"></div>
                    <div class="sensor-dot" style="top: 60%; left: 45%"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social -->
            <div *ngSwitchCase="5">
              <header class="social-header">
                <div class="social-logo">🍽️ FoodieConnect</div>
                <div class="social-nav">
                  <span>Feed</span>
                  <span>Discover</span>
                  <span>Profile</span>
                </div>
              </header>
              <div class="social-content">
                <div class="feed-post">
                  <div class="post-header">
                    <div class="user-avatar">👤</div>
                    <span class="username">Sarah M.</span>
                  </div>
                  <div class="post-image"></div>
                  <div class="post-actions">
                    <span>❤️ 24</span>
                    <span>💬 8</span>
                  </div>
                </div>
                <div class="recommendations">
                  <div class="resto-card">
                    <span>Italian Garden - 4.8⭐</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Logistics -->
            <div *ngSwitchCase="6" class="logistics-layout">
              <div class="fleet-sidebar">
                <div class="fleet-logo">🚛 SmartLogistics</div>
                <div class="nav-item active">Live Map</div>
                <div class="nav-item">Vehicles</div>
              </div>
              <div class="fleet-main">
                <div class="fleet-header">
                  <h3>Fleet Overview</h3>
                  <span>847 Active</span>
                </div>
                <div class="fleet-map">
                  <div class="vehicle-marker" style="top: 25%; left: 30%">🚛</div>
                  <div class="vehicle-marker" style="top: 60%; left: 60%">🚛</div>
                </div>
                <div class="alerts">
                  <div class="alert-item">Vehicle #247 - Maintenance Due</div>
                </div>
              </div>
            </div>

          </ng-container>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .website-mockup {
      width: 100%;
      height: 250px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }

    .mockup-browser {
      width: 100%;
      height: 100%;
      background: white;
    }

    .browser-bar {
      display: flex;
      align-items: center;
      padding: 8px 12px;
      background: #f1f1f1;
      border-bottom: 1px solid #ddd;
      font-size: 11px;
    }

    .browser-dots {
      display: flex;
      gap: 4px;
      margin-right: 12px;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }

    .dot.red { background: #ff5f57; }
    .dot.yellow { background: #ffbd2e; }
    .dot.green { background: #28ca42; }

    .url-bar {
      background: white;
      padding: 2px 8px;
      border-radius: 4px;
      color: #666;
      font-size: 10px;
    }

    .website-content {
      height: calc(100% - 30px);
      overflow: hidden;
      font-size: 10px;
    }

    /* E-commerce */
    .ecommerce {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .site-header {
      display: flex;
      justify-content: space-between;
      padding: 8px 12px;
      background: rgba(255,255,255,0.1);
    }

    .logo {
      font-weight: bold;
      font-size: 12px;
    }

    .main-nav {
      display: flex;
      gap: 12px;
      font-size: 9px;
    }

    .hero-banner {
      text-align: center;
      padding: 16px;
    }

    .hero-banner h1 {
      margin: 0 0 4px 0;
      font-size: 14px;
    }

    .hero-banner p {
      margin: 0 0 8px 0;
      font-size: 10px;
    }

    .cta-btn {
      background: #ff6b6b;
      color: white;
      border: none;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 9px;
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      padding: 0 12px;
    }

    .product-card {
      background: white;
      color: #333;
      padding: 6px;
      border-radius: 4px;
      text-align: center;
    }

    .product-img {
      height: 24px;
      background: #eee;
      margin-bottom: 4px;
      border-radius: 2px;
    }

    .product-card h3 {
      margin: 0 0 2px 0;
      font-size: 8px;
    }

    .price {
      color: #e74c3c;
      font-weight: bold;
      font-size: 9px;
    }

    /* Healthcare */
    .healthcare {
      background: #f8f9fa;
    }

    .healthcare-layout {
      display: flex;
      height: 100%;
    }

    .app-sidebar {
      width: 80px;
      background: #2c3e50;
      color: white;
      padding: 8px;
    }

    .app-sidebar .logo {
      font-size: 10px;
      margin-bottom: 8px;
      color: #3498db;
    }

    .nav-item {
      padding: 3px 0;
      font-size: 8px;
    }

    .nav-item.active {
      color: #3498db;
      font-weight: bold;
    }

    .app-main {
      flex: 1;
      padding: 8px;
    }

    .app-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .app-header h2 {
      margin: 0;
      font-size: 11px;
      color: #2c3e50;
    }

    .user-info {
      font-size: 8px;
      color: #666;
    }

    .stats-row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 6px;
      margin-bottom: 8px;
    }

    .stat-card {
      background: white;
      padding: 6px;
      border-radius: 4px;
      text-align: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .stat-number {
      display: block;
      font-size: 12px;
      font-weight: bold;
      color: #3498db;
    }

    .stat-label {
      font-size: 7px;
      color: #666;
    }

    .patient-list {
      background: white;
      border-radius: 4px;
      padding: 6px;
    }

    .patient-row {
      display: flex;
      justify-content: space-between;
      padding: 3px 0;
      font-size: 8px;
    }

    .status.urgent { color: #e74c3c; }
    .status.routine { color: #27ae60; }

    /* Corporate */
    .corporate {
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      color: white;
    }

    .corporate-header {
      display: flex;
      justify-content: space-between;
      padding: 8px 12px;
      background: rgba(255,255,255,0.1);
    }

    .corp-logo {
      font-weight: bold;
      font-size: 12px;
    }

    .corp-nav {
      display: flex;
      gap: 12px;
      font-size: 9px;
    }

    .corporate-hero {
      text-align: center;
      padding: 12px;
    }

    .corporate-hero h1 {
      margin: 0 0 4px 0;
      font-size: 13px;
    }

    .dashboard-preview {
      padding: 0 12px;
    }

    .charts-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .chart-widget {
      background: rgba(255,255,255,0.1);
      padding: 6px;
      border-radius: 4px;
      text-align: center;
    }

    .chart-line, .chart-bar {
      height: 20px;
      background: linear-gradient(45deg, #27ae60, #2ecc71);
      margin-bottom: 4px;
      border-radius: 2px;
    }

    /* Sustainability */
    .sustainability {
      background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
      color: white;
    }

    .eco-header {
      display: flex;
      justify-content: space-between;
      padding: 8px 12px;
      background: rgba(255,255,255,0.1);
    }

    .eco-logo {
      font-weight: bold;
      font-size: 12px;
    }

    .co2-display {
      font-size: 8px;
      background: rgba(255,255,255,0.2);
      padding: 2px 6px;
      border-radius: 8px;
    }

    .eco-dashboard {
      padding: 8px 12px;
    }

    .metric-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
      margin-bottom: 8px;
    }

    .eco-metric {
      text-align: center;
    }

    .metric-value {
      display: block;
      font-size: 14px;
      font-weight: bold;
    }

    .metric-label {
      font-size: 7px;
      opacity: 0.8;
    }

    .sensor-map {
      height: 40px;
    }

    .map-area {
      height: 100%;
      background: rgba(255,255,255,0.1);
      border-radius: 4px;
      position: relative;
    }

    .sensor-dot {
      position: absolute;
      width: 6px;
      height: 6px;
      background: #fff;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    /* Social */
    .social {
      background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
    }

    .social-header {
      display: flex;
      justify-content: space-between;
      padding: 8px 12px;
      background: rgba(255,255,255,0.2);
    }

    .social-logo {
      font-weight: bold;
      font-size: 12px;
      color: white;
    }

    .social-nav {
      display: flex;
      gap: 12px;
      font-size: 9px;
      color: white;
    }

    .social-content {
      padding: 8px 12px;
    }

    .feed-post {
      background: white;
      border-radius: 8px;
      padding: 6px;
      margin-bottom: 8px;
    }

    .post-header {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 4px;
    }

    .user-avatar {
      width: 16px;
      height: 16px;
      background: #ddd;
      border-radius: 50%;
      font-size: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .username {
      font-weight: bold;
      font-size: 9px;
    }

    .post-image {
      height: 32px;
      background: linear-gradient(45deg, #ff6b6b, #feca57);
      border-radius: 4px;
      margin-bottom: 4px;
    }

    .post-actions {
      display: flex;
      gap: 8px;
      font-size: 8px;
    }

    .recommendations {
      margin-top: 8px;
    }

    .resto-card {
      background: rgba(255,255,255,0.2);
      padding: 4px;
      border-radius: 4px;
      color: white;
      font-size: 8px;
    }

    /* Logistics */
    .logistics {
      background: #f4f6f8;
    }

    .logistics-layout {
      display: flex;
      height: 100%;
    }

    .fleet-sidebar {
      width: 80px;
      background: #34495e;
      color: white;
      padding: 8px;
    }

    .fleet-logo {
      font-size: 9px;
      margin-bottom: 8px;
      color: #3498db;
    }

    .fleet-main {
      flex: 1;
      padding: 8px;
    }

    .fleet-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .fleet-header h3 {
      margin: 0;
      font-size: 11px;
      color: #2c3e50;
    }

    .fleet-map {
      height: 80px;
      background: linear-gradient(135deg, #74b9ff, #0984e3);
      border-radius: 4px;
      position: relative;
      margin-bottom: 8px;
    }

    .vehicle-marker {
      position: absolute;
      font-size: 12px;
    }

    .alerts {
      background: white;
      border-radius: 4px;
      padding: 4px;
    }

    .alert-item {
      font-size: 7px;
      color: #e74c3c;
    }
  `]
})
export class WebsiteMockupComponent {
  @Input() projectId!: number;

  getUrl(): string {
    const urls = [
      '',
      'techcorp-store.com',
      'app.medflow.health',
      'globalfinance.com',
      'app.ecotrack.green',
      'foodieconnect.app',
      'fleet.smartlogistics.com'
    ];
    return urls[this.projectId] || '';
  }

  getClass(): string {
    const classes = [
      '',
      'ecommerce',
      'healthcare',
      'corporate',
      'sustainability',
      'social',
      'logistics'
    ];
    return classes[this.projectId] || '';
  }
} 