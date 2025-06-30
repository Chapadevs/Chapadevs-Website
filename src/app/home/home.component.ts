import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
            We turn your business ideas into powerful web applications with modern technology and professional development practices. Let's build something amazing together.
          </p>
          <div class="hero-buttons">
            <button class="btn btn-primary" (click)="scrollToContact()">
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
            We're a passionate team of developers who combine traditional coding expertise with modern development practices to deliver exceptional web solutions.
          </p>
        </div>
        <div class="team-grid">
          <div class="team-card">
            <div class="team-avatar">
              <img src="assets/erik-avatar.png" alt="Erik Avatar" class="avatar-image">
            </div>
            <h3 class="team-name">Erik</h3>
            <p class="team-role">Project Owner & DevOps</p>
            <p class="team-bio">
              Leads project vision and infrastructure management with expertise in cloud deployment and system architecture.
            </p>
            <div class="team-skills">
              <span class="skill">Project Management</span>
              <span class="skill">Docker containerization</span>
              <span class="skill">Oracle OCI/Cloud</span>
              <span class="skill">DevOps</span>
              <span class="skill">System Design</span>
            </div>
          </div>
          <div class="team-card">
            <div class="team-avatar">
              <img src="assets/romano-avatar.png" alt="Romano Avatar" class="avatar-image">
            </div>
            <h3 class="team-name">Romano</h3>
            <p class="team-role">Frontend Developer</p>
            <p class="team-bio">
              Creates stunning user interfaces with modern Angular frameworks and ensures perfect user experiences.
            </p>
            <div class="team-skills">
              <span class="skill">Angular</span>
              <span class="skill">TypeScript</span>
              <span class="skill">UI/UX</span>
              <span class="skill">Responsive Design</span>
              <span class="skill">Vercel deployment</span>
            </div>
          </div>
          <div class="team-card">
            <div class="team-avatar">MX</div>
            <h3 class="team-name">Maxel</h3>
            <p class="team-role">Backend Developer</p>
            <p class="team-bio">
              Builds robust server architectures and APIs that power scalable web applications.
            </p>
            <div class="team-skills">
              <span class="skill">Java/Spring Boot</span>
              <span class="skill">Databases</span>
              <span class="skill">API Design</span>
              <span class="skill">Security</span>
              <span class="skill">Oracle OCI/Cloud</span>
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
            <h3>Lightning Fast Response</h3>
            <p>Same-day responses to all inquiries and quick turnaround times. Professional websites delivered in 1-4 weeks without compromising quality.</p>
          </div>
          <div class="feature">
            <div class="feature-icon">👁️</div>
            <h3>Complete Transparency</h3>
            <p>Visual project plans, database models, and workflow diagrams keep you informed and involved at every step.</p>
          </div>
          <div class="feature">
            <div class="feature-icon">📋</div>
            <h3>Notion Project Management</h3>
            <p>Complete project tracking and client follow-up through Notion workspaces. Stay updated on every milestone with organized communication.</p>
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
            <p>Complete web solutions from frontend to backend, built with modern technologies for scalability and performance.</p>
            <ul class="service-list">
              <li>Angular & TypeScript</li>
              <li>Java Spring Boot</li>
              <li>PostgreSQL Database</li>
              <li>Oracle Cloud Infrastructure</li>
            </ul>
          </div>
                      <div class="service-card">
            <div class="service-icon blue">⚡</div>
            <h3>Fast Response & Notion Tracking</h3>
            <p>Lightning-fast communication with comprehensive project management. Every project tracked through dedicated Notion workspaces.</p>
            <ul class="service-list">
              <li>Same-Day Response Time</li>
              <li>Notion Project Workspaces</li>
              <li>Real-time Progress Updates</li>
              <li>1-4 Week Delivery</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon purple">💜</div>
            <h3>Modern Frontend Development</h3>
            <p>Beautiful, responsive user interfaces built with cutting-edge frameworks and best practices.</p>
            <ul class="service-list">
              <li>Angular & SCSS</li>
              <li>Responsive Design</li>
              <li>UI/UX Optimization</li>
              <li>Progressive Web Apps</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon orange">🗄️</div>
            <h3>Enterprise Backend Solutions</h3>
            <p>Robust server architectures and APIs built with Java and deployed on Oracle Cloud Infrastructure.</p>
            <ul class="service-list">
              <li>Java Spring Boot APIs</li>
              <li>PostgreSQL Integration</li>
              <li>Oracle OCI Deployment</li>
              <li>Security & Performance</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon green">🔧</div>
            <h3>Ongoing Maintenance & Support</h3>
            <p>Continuous application monitoring, updates, and support with flexible monthly payment plans.</p>
            <ul class="service-list">
              <li>24/7 Application Monitoring</li>
              <li>Regular Updates & Patches</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon teal">📱</div>
            <h3>Mobile-First Responsive Design</h3>
            <p>Websites that work flawlessly across all devices, from smartphones to desktop computers.</p>
            <ul class="service-list">
              <li>Mobile Optimization</li>
              <li>Touch-Friendly Interfaces</li>
              <li>Cross-Browser Compatible</li>
              <li>Fast Loading Times</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon violet">🛠️</div>
            <h3>Professional Development Process</h3>
            <p>Streamlined workflows and modern tools ensure quality code and reliable project delivery.</p>
            <ul class="service-list">
              <li>GitHub Version Control</li>
              <li>Automated Testing</li>
              <li>Code Reviews</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div class="service-card">
            <div class="service-icon yellow">🎨</div>
            <h3>Complete Brand Identity & Design</h3>
            <p>Full branding assistance from concept to execution. We create cohesive brand experiences that stand out.</p>
            <ul class="service-list">
              <li>Logo Design & Brand Identity</li>
              <li>Color Schemes & Typography</li>
              <li>Business Cards & Stationery</li>
              <li>Social Media Graphics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Transparency Section -->
    <section class="transparency">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Project Transparency</span>
          <h2 class="section-title">We Keep You In The Loop</h2>
          <p class="section-description">
            No black boxes here. We believe in complete transparency and client involvement throughout your project development.
          </p>
        </div>
        <div class="transparency-timeline">
          <div class="timeline-item">
            <div class="timeline-connector"></div>
            <div class="timeline-icon">📋</div>
            <div class="timeline-content">
              <h3>Visual Project Planning</h3>
              <p>Interactive project roadmaps and visual timelines help you understand every phase of development from start to finish.</p>
              <div class="timeline-features">
                <span class="feature-tag">Milestone Tracking</span>
                <span class="feature-tag">Progress Bars</span>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-connector"></div>
            <div class="timeline-icon">🗂️</div>
            <div class="timeline-content">
              <h3>Database Model Sharing</h3>
              <p>Clear database structure diagrams and explanations so you understand how your data is organized and managed.</p>
              <div class="timeline-features">
                <span class="feature-tag">Entity Diagrams</span>
                <span class="feature-tag">Data Flow</span>
                <span class="feature-tag">Schema Docs</span>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-connector"></div>
            <div class="timeline-icon">⚡</div>
            <div class="timeline-content">
              <h3>Workflow Visualization</h3>
              <p>Step-by-step process flows showing exactly how your application works and how users will interact with it.</p>
              <div class="timeline-features">
                <span class="feature-tag">User Journeys</span>
                <span class="feature-tag">Flowcharts</span>
                <span class="feature-tag">Wireframes</span>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-connector last"></div>
            <div class="timeline-icon">👥</div>
            <div class="timeline-content">
              <h3>Collaborative Review Sessions</h3>
              <p>Regular meetings to review progress, explain technical decisions, and gather your feedback at every milestone.</p>
              <div class="timeline-features">
                <span class="feature-tag">Live Demos</span>
                <span class="feature-tag">Code Reviews</span>
                <span class="feature-tag">Feedback Sessions</span>
              </div>
            </div>
          </div>
        </div>
        <div class="transparency-details">
          <h3>What You Get Access To:</h3>
          <div class="details-grid">
            <div class="detail-item">
              <span class="check">✅</span>
              <div>
                <strong>Shared Notion Workspace</strong>
                <p>Real-time access to project documentation, progress updates, and technical specifications</p>
              </div>
            </div>
            <div class="detail-item">
              <span class="check">✅</span>
              <div>
                <strong>Technical Documentation</strong>
                <p>Easy-to-understand explanations of code structure, features, and system architecture</p>
              </div>
            </div>
            <div class="detail-item">
              <span class="check">✅</span>
              <div>
                <strong>Live Demo Access</strong>
                <p>Preview your project at any stage with staging environments and development previews</p>
              </div>
            </div>
            <div class="detail-item">
              <span class="check">✅</span>
              <div>
                <strong>Version Control Access</strong>
                <p>View code changes, commits, and development history through our GitHub repositories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Support & Maintenance Section -->
    <section class="support">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Post-Launch Support</span>
          <h2 class="section-title">We Don't Just Build - We Maintain</h2>
          <p class="section-description">
            Your website launch is just the beginning. We provide comprehensive follow-up and ongoing maintenance to ensure your application stays secure, fast, and up-to-date.
          </p>
        </div>
        <div class="support-dashboard">
          <div class="dashboard-main">
            <div class="service-package">
              <div class="package-header">
                <h3>🎯 Complete Support Package</h3>
              </div>
              <div class="package-description">
                Everything you need to keep your website running smoothly and growing your business.
              </div>
              <div class="package-features">
                <div class="feature-row">
                  <span class="feature-icon">📊</span>
                  <div class="feature-info">
                    <strong>24/7 Monitoring</strong>
                    <p>Proactive issue detection and instant alerts</p>
                  </div>
                </div>
                <div class="feature-row">
                  <span class="feature-icon">🔄</span>
                  <div class="feature-info">
                    <strong>Monthly Updates</strong>
                    <p>Security patches and performance optimizations</p>
                  </div>
                </div>
                <div class="feature-row">
                  <span class="feature-icon">💬</span>
                  <div class="feature-info">
                    <strong>Priority Support</strong>
                    <p>Direct access via Notion and email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="dashboard-sidebar">
            <div class="addon-services">
              <h4>🎨 Add-On Services</h4>
              <div class="addon-item">
                <div class="addon-header">
                  <span class="addon-icon">🎨</span>
                  <strong>Brand Design</strong>
                </div>
                <p>Logos, business cards, marketing materials</p>
              </div>
              <div class="addon-item">
                <div class="addon-header">
                  <span class="addon-icon">📈</span>
                  <strong>Marketing Assets</strong>
                </div>
                <p>Brochures, banners, email templates</p>
              </div>
              <div class="addon-item">
                <div class="addon-header">
                  <span class="addon-icon">⚡</span>
                  <strong>Performance Boost</strong>
                </div>
                <p>Speed optimization and SEO improvements</p>
              </div>
            </div>
            
            <div class="support-stats">
              <h4>📈 Our Track Record</h4>
              <div class="stat-item">
                <div class="stat-number">99.9%</div>
                <div class="stat-label">Uptime Guarantee</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">&lt;2hrs</div>
                <div class="stat-label">Response Time</div>
              </div>
            </div>
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
            
            <!-- Progress Bar -->
            <div class="wizard-progress">
              <div class="progress-bar">
                <div class="progress-fill" [style.width.%]="(currentStep / totalSteps) * 100"></div>
              </div>
              <div class="step-indicators">
                <div class="step-indicator" 
                     *ngFor="let step of [1,2,3,4]" 
                     [class.active]="currentStep >= step"
                     [class.current]="currentStep === step">
                  {{ step }}
                </div>
              </div>
            </div>

            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              
              <!-- Step 1: Contact Information -->
              <div class="form-step" *ngIf="currentStep === 1">
                <h4 class="step-title">📞 Contact Information</h4>
                
                <div class="form-group">
                  <label>Your Name *</label>
                  <input type="text" formControlName="name" placeholder="Enter your full name" required>
                </div>
                
                <div class="form-group">
                  <label>Email Address *</label>
                  <input type="email" formControlName="email" placeholder="your.email@example.com" required>
                </div>
                
                <div class="form-group">
                  <label>Company/Organization</label>
                  <input type="text" formControlName="company" placeholder="Your company name (optional)">
                </div>
                
                <div class="form-group">
                  <label>Phone Number</label>
                  <input type="tel" formControlName="phone" placeholder="+1 (555) 123-4567">
                </div>
                
                <div class="form-group">
                  <label>Preferred Contact Method *</label>
                  <select formControlName="contactMethod" required>
                    <option value="">Select preferred method</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
              </div>

              <!-- Step 2: Project Overview -->
              <div class="form-step" *ngIf="currentStep === 2">
                <h4 class="step-title">🎯 Project Overview</h4>
                
                <div class="form-group">
                  <label>Project Type *</label>
                  <select formControlName="projectType" required>
                    <option value="">Select project type</option>
                    <option value="new-website">New Website Design & Development</option>
                    <option value="redesign">Website Redesign/Refresh</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="web-app">Web Application</option>
                    <option value="maintenance">Maintenance/Updates to Existing Site</option>
                    <option value="other">Other (please specify)</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label>Brief Project Description *</label>
                  <textarea formControlName="description" placeholder="Describe your project in 2-3 sentences" rows="3" required></textarea>
                </div>
                
                <div class="form-group">
                  <label>Primary Goals (Select all that apply)</label>
                  <div class="checkbox-group">
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="goalOnlinePresence">
                      <span>Increase online presence</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="goalLeads">
                      <span>Generate leads/sales</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="goalPortfolio">
                      <span>Showcase portfolio/services</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="goalEcommerce">
                      <span>Sell products online</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="goalUX">
                      <span>Improve user experience</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="goalMobile">
                      <span>Mobile optimization</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="goalSEO">
                      <span>SEO improvement</span>
                    </label>
                  </div>
                  <div class="form-group">
                    <input type="text" formControlName="goalOther" placeholder="Other goals (please specify)">
                  </div>
                </div>
              </div>

              <!-- Step 3: Budget & Timeline -->
              <div class="form-step" *ngIf="currentStep === 3">
                <h4 class="step-title">💰 Budget & Timeline</h4>
                
                <div class="form-group">
                  <label>Project Budget Range *</label>
                  <select formControlName="budget" required>
                    <option value="">Select budget range</option>
                    <option value="500-1500">$500 - $1,500</option>
                    <option value="1500-3000">$1,500 - $3,000</option>
                    <option value="3000-5000">$3,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-plus">$10,000+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label>Desired Launch Date *</label>
                  <select formControlName="timeline" required>
                    <option value="">Select timeline</option>
                    <option value="1-2-weeks">Within 1-2 weeks</option>
                    <option value="2-4-weeks">Within 2-4 weeks</option>
                    <option value="1-2-months">Within 1-2 months</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label>Do you have an existing website? *</label>
                  <select formControlName="hasWebsite" required>
                    <option value="">Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                
                <div class="form-group" *ngIf="contactForm.get('hasWebsite')?.value === 'yes'">
                  <label>Website URL</label>
                  <input type="url" formControlName="websiteUrl" placeholder="https://yourwebsite.com">
                </div>
                
                <div class="form-group" *ngIf="contactForm.get('hasWebsite')?.value === 'yes'">
                  <label>If yes, which host do you use?</label>
                  <input type="text" formControlName="currentHost" placeholder="e.g., HostGator, GoDaddy, AWS">
                </div>
              </div>

              <!-- Step 4: Additional Details -->
              <div class="form-step" *ngIf="currentStep === 4">
                <h4 class="step-title">✨ Additional Details</h4>
                
                <div class="form-group">
                  <label>Required Features (Select all that apply)</label>
                  <div class="checkbox-group">
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="featureContactForms">
                      <span>Contact forms</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="featureBooking">
                      <span>Online booking/scheduling</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="featurePayments">
                      <span>Payment processing</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="featureUserAccounts">
                      <span>User accounts/login</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="featureBlog">
                      <span>Blog/news section</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="featureGallery">
                      <span>Photo galleries</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="featureSocial">
                      <span>Social media integration</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="featureNewsletter">
                      <span>Email newsletter signup</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="featureSearch">
                      <span>Search functionality</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="featureMultiLanguage">
                      <span>Multi-language support</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="featureAnalytics">
                      <span>Analytics tracking</span>
                    </label>
                  </div>
                  <div class="form-group">
                    <input type="text" formControlName="featureOther" placeholder="Other features (please specify)">
                  </div>
                </div>
                
                <div class="form-group">
                  <label>Design Style Preference (Select all that apply)</label>
                  <div class="checkbox-group">
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="styleModern">
                      <span>Modern/minimalist</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="styleCreative">
                      <span>Creative/artistic</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="styleProfessional">
                      <span>Professional/corporate</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="stylePlayful">
                      <span>Playful/colorful</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="styleIndustry">
                      <span>Industry-specific design</span>
                    </label>
                    <label class="checkbox-item">
                      <input type="checkbox" formControlName="styleUnsure">
                      <span>Not sure - need guidance</span>
                    </label>
                  </div>
                </div>
                
                <div class="form-group">
                  <label>Do you have existing branding?</label>
                  <select formControlName="branding">
                    <option value="">Select option</option>
                    <option value="yes">Yes - Logo, colors, fonts available</option>
                    <option value="partial">Partial - Some elements available</option>
                    <option value="no">No - Need complete branding</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label>Content Status</label>
                  <select formControlName="contentStatus">
                    <option value="">Select option</option>
                    <option value="ready">I have all content ready</option>
                    <option value="partial">I have some content, need help with rest</option>
                    <option value="need-help">I need help creating all content</option>
                    <option value="copywriting">I need copywriting services</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label>Reference Websites (Optional)</label>
                  <textarea formControlName="referenceWebsites" placeholder="Share 2-3 websites you like and why" rows="3"></textarea>
                </div>
                
                <div class="form-group">
                  <label>Special Requirements or Concerns</label>
                  <textarea formControlName="specialRequirements" placeholder="Any specific technical needs, accessibility requirements, or concerns?" rows="3"></textarea>
                </div>
                
                <div class="form-group">
                  <label>How did you hear about Chapadevs?</label>
                  <select formControlName="hearAboutUs">
                    <option value="">Select option</option>
                    <option value="google">Google search</option>
                    <option value="social-media">Social media</option>
                    <option value="referral">Referral</option>
                    <option value="previous-client">Previous client</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div class="form-group" *ngIf="contactForm.get('hearAboutUs')?.value === 'referral'">
                  <label>Referral Source</label>
                  <input type="text" formControlName="referralSource" placeholder="Who referred you to us?">
                </div>
                
                <div class="form-group" *ngIf="contactForm.get('hearAboutUs')?.value === 'other'">
                  <label>Please specify</label>
                  <input type="text" formControlName="hearAboutUsOther" placeholder="How did you hear about us?">
                </div>
                
                <div class="form-group">
                  <label>Additional Comments</label>
                  <textarea formControlName="additionalComments" placeholder="Anything else you'd like us to know about your project?" rows="3"></textarea>
                </div>
              </div>

              <!-- Navigation Buttons -->
              <div class="wizard-navigation">
                <button type="button" 
                        class="btn btn-outline" 
                        *ngIf="currentStep > 1"
                        (click)="prevStep()">
                  ← Previous
                </button>
                
                <button type="button" 
                        class="btn btn-primary" 
                        *ngIf="currentStep < totalSteps"
                        [disabled]="!isStepValid(currentStep)"
                        (click)="nextStep()">
                  Next →
                </button>
                
                <button type="submit" 
                        class="btn btn-primary" 
                        *ngIf="currentStep === totalSteps"
                        [disabled]="!contactForm.valid || isSubmitting">
                  <span *ngIf="!isSubmitting">📤 Send Message</span>
                  <span *ngIf="isSubmitting">Sending...</span>
                </button>
              </div>
              
              <div *ngIf="submitMessage" class="submit-message" [class.success]="submitSuccess" [class.error]="!submitSuccess">
                {{ submitMessage }}
              </div>
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
                  <p>contact@chapadevs.com</p>
                </div>
              </div>
              <div class="contact-method">
                <span class="contact-icon">📞</span>
                <div>
                  <strong>Call Us</strong>
                  <p>+1 (862) 235 8352</p>
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
            <p>Transforming business ideas into powerful web applications with modern technology and professional development practices.</p>
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
              <a href="mailto:inquire@chapadevs.com" class="contact-link">inquire@chapadevs.com</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Chapadevs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .team-avatar {
      width: 80px;
      height: 90px;
      border-radius: 50%;
      border: 1px solid rgb(0, 110, 10);
      background: linear-gradient(135deg, #10b981, #059669);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 1.5rem;
      margin: 0 auto 1rem;
      overflow: hidden;
      position: relative;
    }
    
    .avatar-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    /* Transparency Section Styles */
    .transparency {
      padding: 5rem 0;
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    }

    .transparency .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .transparency .section-badge {
      display: inline-block;
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: 25px;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .transparency .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 1rem;
    }

    .transparency .section-description {
      font-size: 1.125rem;
      color: #64748b;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.7;
    }

    .transparency-timeline {
      max-width: 800px;
      margin: 0 auto 3rem;
      position: relative;
    }

    .timeline-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 3rem;
      position: relative;
    }

    .timeline-item:last-child {
      margin-bottom: 0;
    }

    .timeline-connector {
      position: absolute;
      left: 30px;
      top: 60px;
      width: 3px;
      height: calc(100% + 3rem);
      background: linear-gradient(180deg, #10b981, #059669);
      border-radius: 2px;
    }

    .timeline-connector.last {
      display: none;
    }

    .timeline-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #10b981, #059669);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: white;
      margin-right: 2rem;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
      position: relative;
      z-index: 2;
      flex-shrink: 0;
    }

    .timeline-content {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
      border: 1px solid #e2e8f0;
      flex: 1;
      position: relative;
      transition: all 0.3s ease;
    }

    .timeline-content:hover {
      transform: translateX(8px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    }

    .timeline-content::before {
      content: '';
      position: absolute;
      left: -8px;
      top: 24px;
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-right: 8px solid white;
      filter: drop-shadow(-1px 0 1px rgba(0, 0, 0, 0.1));
    }

    .timeline-content h3 {
      font-size: 1.375rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .timeline-content p {
      color: #64748b;
      line-height: 1.6;
      margin-bottom: 1rem;
      font-size: 0.95rem;
    }

    .timeline-features {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .feature-tag {
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 500;
      white-space: nowrap;
    }

    .transparency-details {
      background: white;
      padding: 2.5rem;
      border-radius: 16px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      border: 1px solid #e2e8f0;
    }

    .transparency-details h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .details-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .detail-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem;
      background: #f8fafc;
      border-radius: 12px;
      border-left: 4px solid #10b981;
    }

    .detail-item .check {
      color: #10b981;
      font-size: 1.25rem;
      font-weight: bold;
      flex-shrink: 0;
      margin-top: 0.125rem;
    }

    .detail-item strong {
      display: block;
      color: #1e293b;
      font-weight: 600;
      margin-bottom: 0.25rem;
      font-size: 1rem;
    }

    .detail-item p {
      color: #64748b;
      font-size: 0.875rem;
      line-height: 1.5;
      margin: 0;
    }

    /* Support Dashboard Styles */
    .support-dashboard {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .dashboard-main {
      background: white;
      border-radius: 16px;
      border: 1px solid #e2e8f0;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .service-package {
      padding: 2rem;
    }

    .package-header {
      display: flex;
      justify-content: between;
      align-items: center;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid #f1f5f9;
    }

    .package-header h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1e293b;
      margin: 0;
    }

    .price-tag {
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: 600;
      font-size: 0.875rem;
    }

    .package-description {
      color: #64748b;
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .package-features {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .feature-row {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background: #f8fafc;
      border-radius: 8px;
      border-left: 3px solid #10b981;
    }

    .feature-icon {
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .feature-info {
      flex: 1;
    }

    .feature-info strong {
      display: block;
      color: #1e293b;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    .feature-info p {
      color: #64748b;
      font-size: 0.875rem;
      margin: 0;
      line-height: 1.4;
    }

    .feature-status {
      color: #10b981;
      font-weight: 600;
      font-size: 0.875rem;
    }

    .dashboard-sidebar {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .addon-services {
      background: white;
      padding: 1.5rem;
      border-radius: 12px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .addon-services h4 {
      font-size: 1.125rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 1rem;
    }

    .addon-item {
      padding: 1rem;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      margin-bottom: 0.75rem;
      transition: all 0.2s ease;
    }

    .addon-item:hover {
      border-color: #10b981;
      background: #f0fdf4;
    }

    .addon-item:last-child {
      margin-bottom: 0;
    }

    .addon-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .addon-icon {
      font-size: 1.125rem;
    }

    .addon-header strong {
      color: #1e293b;
      font-weight: 600;
    }

    .addon-item p {
      color: #64748b;
      font-size: 0.875rem;
      margin: 0 0 0.5rem 0;
      line-height: 1.4;
    }

    .addon-price {
      color: #10b981;
      font-weight: 600;
      font-size: 0.875rem;
    }

    .support-stats {
      background: linear-gradient(135deg, #1e293b, #334155);
      color: white;
      padding: 1.5rem;
      border-radius: 12px;
      text-align: center;
    }

    .support-stats h4 {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: white;
    }

    .stat-item {
      margin-bottom: 1rem;
    }

    .stat-item:last-child {
      margin-bottom: 0;
    }

    .stat-number {
      font-size: 1.75rem;
      font-weight: 700;
      color: #10b981;
      margin-bottom: 0.25rem;
    }

    .stat-label {
      font-size: 0.875rem;
      color: #cbd5e1;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .transparency {
        padding: 3rem 0;
      }
      
      .transparency .section-title {
        font-size: 2rem;
      }
      
      .transparency-timeline {
        max-width: 100%;
        padding: 0 1rem;
      }
      
      .timeline-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 2rem;
      }
      
      .timeline-connector {
        left: 50%;
        transform: translateX(-50%);
        height: 2rem;
        top: 80px;
      }
      
      .timeline-icon {
        margin-right: 0;
        margin-bottom: 1rem;
      }
      
      .timeline-content {
        padding: 1.5rem;
        margin-top: 0;
      }
      
      .timeline-content::before {
        display: none;
      }
      
      .timeline-content:hover {
        transform: translateY(-4px);
      }
      
      .transparency-details {
        padding: 1.5rem;
      }
      
      .details-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      
      .detail-item {
        padding: 0.75rem;
      }
      
      .support-dashboard {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      
      .package-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
      }
      
      .feature-row {
        padding: 0.75rem;
      }
      
      .addon-services {
        padding: 1rem;
      }
      
      .support-stats {
        padding: 1rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;
  currentStep = 1;
  totalSteps = 4;

  constructor(private router: Router, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      // Contact Information
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      phone: [''],
      contactMethod: ['', Validators.required],
      
      // Project Overview
      projectType: ['', Validators.required],
      description: ['', Validators.required],
      goalOnlinePresence: [false],
      goalLeads: [false],
      goalPortfolio: [false],
      goalEcommerce: [false],
      goalUX: [false],
      goalMobile: [false],
      goalSEO: [false],
      goalOther: [''],
      
      // Budget & Timeline
      budget: ['', Validators.required],
      timeline: ['', Validators.required],
      
      // Technical Requirements
      hasWebsite: ['', Validators.required],
      websiteUrl: [''],
      currentHost: [''],
      featureContactForms: [false],
      featureBooking: [false],
      featurePayments: [false],
      featureUserAccounts: [false],
      featureBlog: [false],
      featureGallery: [false],
      featureSocial: [false],
      featureNewsletter: [false],
      featureSearch: [false],
      featureMultiLanguage: [false],
      featureAnalytics: [false],
      featureOther: [''],
      
      // Design & Content
      styleModern: [false],
      styleCreative: [false],
      styleProfessional: [false],
      stylePlayful: [false],
      styleIndustry: [false],
      styleUnsure: [false],
      branding: ['', Validators.required],
      contentStatus: ['', Validators.required],
      referenceWebsites: [''],
      
      // Additional Information
      specialRequirements: [''],
      hearAboutUs: [''],
      referralSource: [''],
      hearAboutUsOther: [''],
      additionalComments: ['']
    });
  }

  ngOnInit(): void {
    // Initialize EmailJS
    emailjs.init(environment.emailService.publicKey);
  }

  goToPortfolio(): void {
    this.router.navigate(['/portfolio']);
  }

  scrollToContact(): void {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }

  nextStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  isStepValid(step: number): boolean {
    switch (step) {
      case 1:
        return !!(this.contactForm.get('name')?.valid && 
                 this.contactForm.get('email')?.valid && 
                 this.contactForm.get('contactMethod')?.valid);
      case 2:
        return !!(this.contactForm.get('projectType')?.valid && 
                 this.contactForm.get('description')?.valid);
      case 3:
        return !!(this.contactForm.get('budget')?.valid && 
                 this.contactForm.get('timeline')?.valid);
      case 4:
        return true; // Optional fields
      default:
        return true;
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      // Format the form data for email
      const formData = this.formatFormData(this.contactForm.value);
      
      // Send the data via EmailJS
      this.sendEmail(formData);
    } else {
      this.submitMessage = 'Please fill in all required fields.';
      this.submitSuccess = false;
    }
  }

  private formatFormData(data: any): any {
    // Format the data into a more readable format for email
    const formatted = {
      ...data,
      goals: this.getSelectedGoals(data),
      features: this.getSelectedFeatures(data),
      styles: this.getSelectedStyles(data)
    };
    
    return formatted;
  }

  private getSelectedGoals(data: any): string[] {
    const goals = [];
    if (data.goalOnlinePresence) goals.push('Increase online presence');
    if (data.goalLeads) goals.push('Generate leads/sales');
    if (data.goalPortfolio) goals.push('Showcase portfolio/services');
    if (data.goalEcommerce) goals.push('Sell products online');
    if (data.goalUX) goals.push('Improve user experience');
    if (data.goalMobile) goals.push('Mobile optimization');
    if (data.goalSEO) goals.push('SEO improvement');
    if (data.goalOther) goals.push(`Other: ${data.goalOther}`);
    return goals;
  }

  private getSelectedFeatures(data: any): string[] {
    const features = [];
    if (data.featureContactForms) features.push('Contact forms');
    if (data.featureBooking) features.push('Online booking/scheduling');
    if (data.featurePayments) features.push('Payment processing');
    if (data.featureUserAccounts) features.push('User accounts/login');
    if (data.featureBlog) features.push('Blog/news section');
    if (data.featureGallery) features.push('Photo galleries');
    if (data.featureSocial) features.push('Social media integration');
    if (data.featureNewsletter) features.push('Email newsletter signup');
    if (data.featureSearch) features.push('Search functionality');
    if (data.featureMultiLanguage) features.push('Multi-language support');
    if (data.featureAnalytics) features.push('Analytics tracking');
    if (data.featureOther) features.push(`Other: ${data.featureOther}`);
    return features;
  }

  private getSelectedStyles(data: any): string[] {
    const styles = [];
    if (data.styleModern) styles.push('Modern/minimalist');
    if (data.styleCreative) styles.push('Creative/artistic');
    if (data.styleProfessional) styles.push('Professional/corporate');
    if (data.stylePlayful) styles.push('Playful/colorful');
    if (data.styleIndustry) styles.push('Industry-specific design');
    if (data.styleUnsure) styles.push('Not sure - need guidance');
    return styles;
  }

  private async sendEmail(formData: any): Promise<void> {
    try {
      console.log('📧 Sending email with data:', formData);
      
      // Prepare email parameters for EmailJS
      const emailParams = {
        to_email: 'admin@chapadevs.com',
        from_name: formData.name,
        from_email: formData.email,
        company_name: formData.company,
        phone: formData.phone || 'Not provided',
        contact_method: formData.contactMethod || 'email',
        project_type: formData.projectType,
        project_description: formData.description,
        goals: formData.goals && formData.goals.length > 0 ? formData.goals.join(', ') : 'Not specified',
        features: formData.features && formData.features.length > 0 ? formData.features.join(', ') : 'Not specified',
        styles: formData.styles && formData.styles.length > 0 ? formData.styles.join(', ') : 'Not specified',
        budget: formData.budget,
        timeline: formData.timeline,
        has_website: formData.hasWebsite || 'Not specified',
        website_url: formData.websiteUrl || 'Not provided',
        current_host: formData.currentHost || 'Not provided',
        branding: formData.branding || 'Not specified',
        content_status: formData.contentStatus || 'Not specified',
        reference_websites: formData.referenceWebsites || 'Not provided',
        special_requirements: formData.specialRequirements || 'None',
        hear_about_us: formData.hearAboutUs || 'Not specified',
        referral_source: formData.referralSource || 'Not provided',
        hear_about_us_other: formData.hearAboutUsOther || 'Not provided',
        additional_comments: formData.additionalComments || 'None',
        submission_date: new Date().toLocaleString()
      };

      console.log('📤 About to send email with params:', emailParams);
      
      // Send email via EmailJS
      const result = await emailjs.send(
        environment.emailService.serviceId,
        environment.emailService.templateId,
        emailParams
      );
      
      console.log('✅ Email sent successfully:', result);
      
      // Show success message
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.submitMessage = 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.';
      
      // Reset form after successful submission
      setTimeout(() => {
        this.contactForm.reset();
        this.currentStep = 1;
        this.submitMessage = '';
        this.submitSuccess = false;
      }, 5000);
      
    } catch (error) {
      console.error('❌ Email sending failed:', error);
      
      this.isSubmitting = false;
      this.submitSuccess = false;
      this.submitMessage = 'Sorry, there was an error sending your message. Please try again or contact us directly at admin@chapadevs.com';
    }
  }
} 