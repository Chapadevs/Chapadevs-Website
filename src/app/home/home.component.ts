import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="brand">
            <span class="code-icon">&lt;/&gt;</span>
            <span class="brand-name">Chapadevs</span>
          </div>
          <h1 class="hero-title">
            Your Digital Vision, <span class="text-green">Our Code</span>
          </h1>
          <p class="hero-description">
            We turn your business ideas into powerful web applications with cutting-edge technology and AI-driven development. Let's build something amazing together.
          </p>
          <div class="hero-buttons">
            <button class="btn btn-primary">
              Start Your Project <span class="arrow">→</span>
            </button>
            <button class="btn btn-outline" (click)="goToPortfolio()">View Our Work</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="browser-mockup">
            <div class="browser-header">
              <div class="browser-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
            </div>
            <div class="browser-content">
              <div class="code-line"></div>
              <div class="code-line short"></div>
              <div class="code-line"></div>
              <div class="code-line medium"></div>
              <div class="code-block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Our Team</span>
          <h2 class="section-title">Meet Our Team</h2>
          <p class="section-description">
            We're a passionate team of developers who combine traditional coding expertise with AI-driven development approaches to deliver exceptional web solutions.
          </p>
        </div>
        <div class="team-grid">
          <div class="team-card">
            <div class="team-avatar">ER</div>
            <h3 class="team-name">Erik</h3>
            <p class="team-role">Project Owner & DevOps</p>
            <p class="team-bio">
              Leads project vision and infrastructure management with expertise in cloud deployment and system architecture.
            </p>
            <div class="team-skills">
              <span class="skill">Project Management</span>
              <span class="skill">AWS/Cloud</span>
              <span class="skill">DevOps</span>
              <span class="skill">System Design</span>
            </div>
          </div>
          <div class="team-card">
            <div class="team-avatar">RO</div>
            <h3 class="team-name">Romano</h3>
            <p class="team-role">Frontend Developer</p>
            <p class="team-bio">
              Creates stunning user interfaces with modern React frameworks and ensures perfect user experiences.
            </p>
            <div class="team-skills">
              <span class="skill">React</span>
              <span class="skill">TypeScript</span>
              <span class="skill">UI/UX</span>
              <span class="skill">Responsive Design</span>
            </div>
          </div>
          <div class="team-card">
            <div class="team-avatar">MX</div>
            <h3 class="team-name">Maxell</h3>
            <p class="team-role">Backend Developer</p>
            <p class="team-bio">
              Builds robust server architectures and APIs that power scalable web applications.
            </p>
            <div class="team-skills">
              <span class="skill">Node.js</span>
              <span class="skill">Databases</span>
              <span class="skill">API Design</span>
              <span class="skill">Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="features-grid">
          <div class="feature">
            <div class="feature-icon">⚡</div>
            <h3>AI-Driven Development</h3>
            <p>We leverage cutting-edge AI tools to accelerate development and ensure code quality.</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🎯</div>
            <h3>Results Focused</h3>
            <p>Every project is delivered with measurable business impact and user satisfaction in mind.</p>
          </div>
          <div class="feature">
            <div class="feature-icon">👥</div>
            <h3>Collaborative Approach</h3>
            <p>We work closely with clients throughout the development process for optimal results.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Our Services</span>
          <h2 class="section-title">What We Build</h2>
          <p class="section-description">
            From concept to deployment, we provide comprehensive web development services tailored to your business needs.
          </p>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon green">🌐</div>
            <h3>Full-Stack Web Applications</h3>
            <p>Complete web solutions from frontend to backend, designed for scalability and performance.</p>
            <ul class="service-list">
              <li>React & Next.js</li>
              <li>Node.js & Express</li>
              <li>Database Design</li>
              <li>Cloud Deployment</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon blue">🤖</div>
            <h3>AI-Driven Development</h3>
            <p>Leveraging artificial intelligence to accelerate development and enhance code quality.</p>
            <ul class="service-list">
              <li>Code Generation</li>
              <li>Automated Testing</li>
              <li>Smart Debugging</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon purple">💜</div>
            <h3>Modern Frontend Solutions</h3>
            <p>Beautiful, responsive user interfaces that provide exceptional user experiences.</p>
            <ul class="service-list">
              <li>React/Vue/Angular</li>
              <li>Responsive Design</li>
              <li>UI/UX Design</li>
              <li>Progressive Web Apps</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon orange">🗄️</div>
            <h3>Backend API Development</h3>
            <p>Robust server architectures and APIs that power your applications reliably.</p>
            <ul class="service-list">
              <li>RESTful APIs</li>
              <li>GraphQL</li>
              <li>Database Integration</li>
              <li>Security Implementation</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon teal">📱</div>
            <h3>Mobile-First Design</h3>
            <p>Responsive designs that work perfectly across all devices and screen sizes.</p>
            <ul class="service-list">
              <li>Mobile Optimization</li>
              <li>Touch Interfaces</li>
              <li>Cross-Platform</li>
              <li>App-like Experience</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon violet">🛠️</div>
            <h3>Custom Development</h3>
            <p>Tailored solutions built specifically for your unique business requirements.</p>
            <ul class="service-list">
              <li>Custom Features</li>
              <li>Third-party Integration</li>
              <li>Legacy Modernization</li>
              <li>Consultation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Get In Touch</span>
          <h2 class="section-title">Let's Build Together</h2>
          <p class="section-description">
            Ready to transform your ideas into reality? We'd love to hear about your project and discuss how we can help you succeed.
          </p>
        </div>
        <div class="contact-content">
          <div class="contact-form">
            <h3>📧 Send Us a Message</h3>
            <form>
              <div class="form-group">
                <label>Your Name *</label>
                <input type="text" placeholder="Enter your full name" required>
              </div>
              <div class="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="your.email@example.com" required>
              </div>
              <div class="form-group">
                <label>Project Description *</label>
                <textarea placeholder="Tell us about your project, goals, timeline, and any specific requirements..." rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-full">
                📤 Send Message
              </button>
            </form>
          </div>
          <div class="contact-info">
            <div class="info-card highlight">
              <h3>Why Choose Chapadevs?</h3>
              <div class="benefits">
                <div class="benefit">
                  <span class="check">✅</span>
                  <div>
                    <strong>Fast Response Time</strong>
                    <p>We respond to all inquiries within 24 hours</p>
                  </div>
                </div>
                <div class="benefit">
                  <span class="check">✅</span>
                  <div>
                    <strong>Transparent Process</strong>
                    <p>Clear communication throughout your project</p>
                  </div>
                </div>
                <div class="benefit">
                  <span class="check">✅</span>
                  <div>
                    <strong>Quality Guarantee</strong>
                    <p>We stand behind our work with ongoing support</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-methods">
              <div class="contact-method">
                <span class="contact-icon">📧</span>
                <div>
                  <strong>Email Us</strong>
                  <p>hello@chapadevs.com</p>
                </div>
              </div>
              <div class="contact-method">
                <span class="contact-icon">📞</span>
                <div>
                  <strong>Call Us</strong>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div class="contact-method">
                <span class="contact-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Remote Team • Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>Chapadevs</h3>
            <p>Transforming business ideas into powerful web applications with cutting-edge technology and AI-driven development.</p>
          </div>
          <div class="footer-links">
            <div class="link-group">
              <h4>Quick Links</h4>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
            <div class="link-group">
              <h4>Get In Touch</h4>
              <p>Ready to start your project?</p>
              <a href="mailto:hello@chapadevs.com" class="contact-link">hello@chapadevs.com</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Chapadevs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToPortfolio(): void {
    this.router.navigate(['/portfolio']);
  }
} 