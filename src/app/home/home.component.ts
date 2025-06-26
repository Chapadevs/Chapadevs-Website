import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
                  <p>inquire@chapadevs.com</p>
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
  styles: []
})
export class HomeComponent {
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

  goToPortfolio(): void {
    this.router.navigate(['/portfolio']);
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
      
      // Here you would typically send the data to your backend
      // For now, we'll simulate the submission
      this.simulateSubmission(formData);
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

  private simulateSubmission(formData: any): void {
    // Simulate API call delay
    setTimeout(() => {
      console.log('Form Data:', formData);
      
      // For now, just show success message
      // In a real app, you'd send this to your backend/email service
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.submitMessage = 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.';
      
      // Reset form after successful submission
      setTimeout(() => {
        this.contactForm.reset();
        this.submitMessage = '';
      }, 5000);
    }, 2000);
  }
} 