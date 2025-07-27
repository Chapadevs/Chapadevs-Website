import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-inquiry-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styles: [`
    /* TEMPORARY INLINE STYLES - TESTING */
    .inquiry-section {
      background: #ffffff;
      padding: 80px 0 40px 0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      overflow: hidden;
      border: 3px solid #10b981; /* TEST BORDER */
    }
    
    .section-badge {
      display: inline-block;
      background: linear-gradient(135deg, #10b981, #0d9488);
      color: #ffffff;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      font-family: 'Code Bold', monospace;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 1rem;
      text-align: center;
      position: relative;
    }
    
    .section-badge::before {
      content: '<';
      color: #10b981;
      margin-right: 0.5rem;
    }
    
    .section-badge::after {
      content: '/>';
      color: #10b981;
      margin-left: 0.5rem;
    }
    
    .section-title {
      font-family: 'Code Bold', monospace;
      font-size: 2.5rem;
      font-weight: 700;
      color: #111827;
      margin-bottom: 1rem;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      position: relative;
    }
    
    .section-title::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: 0;
      border-left: 12px solid transparent;
      border-bottom: 12px solid #10b981;
    }
    
    .inquiry-form {
      max-width: 520px;
      width: 100%;
      margin: 0 auto;
      background: #ffffff;
      padding: 2.5rem 2rem 2rem 2rem;
      border-radius: 0.25rem;
      box-shadow: 0 4px 32px rgba(16, 185, 129, 0.08), 0 1.5px 6px rgba(31, 41, 55, 0.04);
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      position: relative;
      z-index: 2;
      border: 2px solid #10b981; /* TEST BORDER */
    }
    
    .inquiry-form::before {
      content: '<';
      color: #10b981;
      margin-right: 0.5rem;
    }
    
    .inquiry-form::after {
      content: '/>';
      color: #10b981;
      margin-left: 0.5rem;
    }
    
    input, select, textarea {
      padding: 13px 16px;
      border: 2px solid #e5e7eb;
      border-radius: 0.25rem;
      font-size: 1rem;
      background: #ffffff;
      transition: border-color 0.3s, box-shadow 0.3s;
      font-family: 'Coolvetica', sans-serif;
    }
    
    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: #10b981;
      box-shadow: 0 0 0 2px #a7f3d0;
    }
    
    .btn {
      background: #ffffff;
      color: #10b981;
      border: 2px solid #10b981;
      border-radius: 0.25rem;
      padding: 1rem 2.5rem;
      font-family: 'Code Bold', monospace;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      position: relative;
    }
    
    .btn:hover:not(:disabled) {
      background: #10b981;
      color: #ffffff;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    }
    
    .btn-primary {
      background: #10b981;
      color: #ffffff;
      border: none;
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.08);
    }
    
    .btn-primary:hover:not(:disabled) {
      background: #0d9488;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    }
    
    /* PROGRESS INDICATOR - SHARP EDGED BALLS */
    .wizard-progress {
      margin-bottom: 1.5rem;
      width: 100%;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      z-index: 2;
    }
    
    .progress-bar {
      width: 100%;
      height: 7px;
      background: #e5e7eb;
      border-radius: 0.25rem; /* Sharp edges instead of rounded */
      overflow: hidden;
      margin-bottom: 1.2rem;
      position: relative;
    }
    

    
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #10b981 60%, #0d9488 100%);
      transition: width 0.3s ease;
    }
    
    .step-indicators {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 0 0.5rem;
      position: relative;
    }
    
    .progress-line {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 2px;
      background: #e5e7eb;
      transform: translateY(-50%);
      z-index: 1;
    }
    

    
    .step-indicator {
      width: 40px;
      height: 40px;
      border-radius: 0.25rem; /* Sharp edges instead of circular */
      background: #e5e7eb;
      color: #6b7280;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Code Bold', monospace;
      font-weight: 700;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(16, 185, 129, 0.08);
      position: relative;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      flex-shrink: 0;
      z-index: 3;
    }
    

    
    .step-indicator.active {
      background: #10b981;
      color: #ffffff;
      box-shadow: 0 0 0 3px #a7f3d0;
      transform: scale(1.05);
    }
    
    .step-indicator.current {
      background: #0d9488;
      color: #ffffff;
      transform: scale(1.12);
      box-shadow: 0 0 0 4px #a7f3d0;
    }
    

    
    @media (max-width: 600px) {
      .step-indicator {
        width: 28px;
        height: 28px;
        font-size: 0.95rem;
      }
    }
  `],
  template: `
    <section class="inquiry-section" id="inquiry-form">
      <header class="section-header">
        <span class="section-badge">Inquire Now</span>
        <h2 class="section-title">Project Inquiry</h2>
        <p class="section-description">Let's get started! Fill out each step and review before submitting.</p>
      </header>
      <div class="wizard-progress">
        <div class="progress-bar">
          <div class="progress-fill" [style.width.%]="(step / (steps.length - 1)) * 100"></div>
        </div>
        <div class="step-indicators">
          <div class="progress-line">
            <div class="progress-fill" [style.width.%]="(step / (steps.length - 1)) * 100"></div>
          </div>
          <div *ngFor="let s of steps; let i = index" class="step-indicator" [class.active]="i <= step" [class.current]="i === step">{{ i + 1 }}</div>
        </div>
      </div>
      <form [formGroup]="inquiryForm" class="inquiry-form" (ngSubmit)="onSubmit()" autocomplete="off" novalidate>
        <!-- Step 1: Contact Info -->
        <div *ngIf="step === 0" class="form-step">
          <h3 class="step-title">Contact Information</h3>
          <div class="form-group">
            <label for="from_name">Your Name *</label>
            <input id="from_name" formControlName="from_name" required />
          </div>
          <div class="form-group">
            <label for="from_email">Email *</label>
            <input id="from_email" formControlName="from_email" type="email" required />
          </div>
          <div class="form-group">
            <label for="company_name">Company/Organization (optional)</label>
            <input id="company_name" formControlName="company_name" />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number (optional)</label>
            <input id="phone" formControlName="phone" />
          </div>
          <div class="form-group">
            <label for="contact_method">Preferred Contact Method *</label>
            <select id="contact_method" formControlName="contact_method" required>
              <option value="">Select</option>
              <option>Email</option>
              <option>Phone</option>
              <option>WhatsApp</option>
            </select>
          </div>
        </div>
        <!-- Step 2: Project Details -->
        <div *ngIf="step === 1" class="form-step">
          <h3 class="step-title">Project Details</h3>
          <div class="form-group">
            <label for="project_type">Project Type *</label>
            <select id="project_type" formControlName="project_type" required>
              <option value="">Select</option>
              <option>New Website Design & Development</option>
              <option>Website Redesign/Refresh</option>
              <option>E-commerce Store</option>
              <option>Landing Page</option>
              <option>Web Application</option>
              <option>Maintenance/Updates to Existing Site</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="project_description">Brief Project Description *</label>
            <textarea id="project_description" formControlName="project_description" rows="3" required placeholder="Describe your project in 2-3 sentences"></textarea>
          </div>
          <div class="form-group">
            <label>Primary Goals *</label>
            <div class="checkbox-group">
              <label *ngFor="let goal of goalsList">
                <input type="checkbox" [value]="goal" (change)="onGoalChange($event)" [checked]="inquiryForm.value.goals.includes(goal)" />
                {{ goal }}
              </label>
              <label>
                <input type="checkbox" value="Other" (change)="onGoalChange($event)" [checked]="inquiryForm.value.goals.includes('Other')" />
                Other:
                <input *ngIf="inquiryForm.value.goals.includes('Other')" formControlName="goals_other" placeholder="Please specify" />
              </label>
            </div>
          </div>
        </div>
        <!-- Step 3: Features & Design -->
        <div *ngIf="step === 2" class="form-step">
          <h3 class="step-title">Features & Design</h3>
          <div class="form-group">
            <label>Required Features *</label>
            <div class="checkbox-group">
              <label *ngFor="let feature of featuresList">
                <input type="checkbox" [value]="feature" (change)="onFeatureChange($event)" [checked]="inquiryForm.value.features.includes(feature)" />
                {{ feature }}
              </label>
              <label>
                <input type="checkbox" value="Other" (change)="onFeatureChange($event)" [checked]="inquiryForm.value.features.includes('Other')" />
                Other:
                <input *ngIf="inquiryForm.value.features.includes('Other')" formControlName="features_other" placeholder="Please specify" />
              </label>
            </div>
          </div>
          <div class="form-group">
            <label>Design Style Preference</label>
            <div class="checkbox-group">
              <label *ngFor="let style of stylesList">
                <input type="checkbox" [value]="style" (change)="onStyleChange($event)" [checked]="inquiryForm.value.styles.includes(style)" />
                {{ style }}
              </label>
            </div>
          </div>
        </div>
        <!-- Step 4: Timeline & Budget -->
        <div *ngIf="step === 3" class="form-step">
          <h3 class="step-title">Timeline & Budget</h3>
          <div class="form-group">
            <label for="budget">Project Budget Range *</label>
            <select id="budget" formControlName="budget" required>
              <option value="">Select</option>
              <option>$500 - $1,500</option>
              <option>$1,500 - $3,000</option>
              <option>$3,000 - $5,000</option>
              <option>$5,000 - $10,000</option>
              <option>$10,000+</option>
              <option>Let's discuss</option>
            </select>
          </div>
          <div class="form-group">
            <label for="timeline">Desired Launch Date *</label>
            <select id="timeline" formControlName="timeline" required>
              <option value="">Select</option>
              <option>Within 1-2 weeks</option>
              <option>Within 2-4 weeks</option>
              <option>Within 1-2 months</option>
            </select>
          </div>
        </div>
        <!-- Step 5: Current Website -->
        <div *ngIf="step === 4" class="form-step">
          <h3 class="step-title">Current Website</h3>
          <div class="form-group">
            <label>Do you have an existing website? *</label>
            <div>
              <label><input type="radio" formControlName="has_website" value="Yes" /> Yes</label>
              <label><input type="radio" formControlName="has_website" value="No" /> No</label>
            </div>
          </div>
          <div *ngIf="inquiryForm.value.has_website === 'Yes'">
            <div class="form-group">
              <label for="website_url">Website URL</label>
              <input id="website_url" formControlName="website_url" />
            </div>
            <div class="form-group">
              <label for="current_host">Which host do you use?</label>
              <input id="current_host" formControlName="current_host" />
            </div>
          </div>
        </div>
        <!-- Step 6: Additional Details -->
        <div *ngIf="step === 5" class="form-step">
          <h3 class="step-title">Additional Details</h3>
          <div class="form-group">
            <label>Do you have existing branding? *</label>
            <div>
              <label><input type="radio" formControlName="branding" value="Yes" /> Yes</label>
              <label><input type="radio" formControlName="branding" value="No" /> No</label>
              <label><input type="radio" formControlName="branding" value="Partial" /> Partial</label>
            </div>
          </div>
          <div *ngIf="inquiryForm.value.branding === 'Yes'">
            <div class="form-group">
              <label for="branding_details">Logo, colors, fonts, credentials available?</label>
              <input id="branding_details" formControlName="branding_details" />
            </div>
          </div>
          <div class="form-group">
            <label for="content_status">Content Status *</label>
            <select id="content_status" formControlName="content_status" required>
              <option value="">Select</option>
              <option>I have all content ready</option>
              <option>I have some content, need help with rest</option>
              <option>I need help creating all content</option>
              <option>I need copywriting services</option>
            </select>
          </div>
          <div class="form-group">
            <label for="reference_websites">Reference Websites (optional)</label>
            <textarea id="reference_websites" formControlName="reference_websites" rows="2"></textarea>
          </div>
          <div class="form-group">
            <label for="special_requirements">Special Requirements or Concerns</label>
            <textarea id="special_requirements" formControlName="special_requirements" rows="2"></textarea>
          </div>
          <div class="form-group">
            <label for="hear_about_us">How did you hear about Chapadevs?</label>
            <select id="hear_about_us" formControlName="hear_about_us">
              <option value="">Select</option>
              <option>Google search</option>
              <option>Social media</option>
              <option>Referral</option>
              <option>Previous client</option>
              <option>Other</option>
            </select>
            <input *ngIf="inquiryForm.value.hear_about_us === 'Other'" formControlName="hear_about_us_other" placeholder="Please specify" />
          </div>
          <div class="form-group">
            <label for="additional_comments">Additional Comments</label>
            <textarea id="additional_comments" formControlName="additional_comments" rows="2" placeholder="Anything else you'd like us to know about your project?"></textarea>
          </div>
        </div>
        <!-- Step 7: Review & Submit -->
        <div *ngIf="step === 6" class="form-step">
          <h3 class="step-title">Review & Submit</h3>
          <div class="review-section">
            <div *ngFor="let field of reviewFields">
              <div class="review-label">{{ field.label }}</div>
              <div class="review-value">{{ inquiryForm.value[field.key] }}</div>
            </div>
          </div>
        </div>
        <div class="wizard-navigation">
          <button class="btn" type="button" (click)="prevStep()" [disabled]="step === 0">Back</button>
          <button class="btn btn-primary" type="button" (click)="nextStep()" *ngIf="step < steps.length - 1">Next</button>
          <button class="btn btn-primary" type="submit" *ngIf="step === steps.length - 1" [disabled]="inquiryForm.invalid || isSubmitting">
            <span *ngIf="!isSubmitting">Submit Inquiry</span>
            <span *ngIf="isSubmitting">Sending...</span>
          </button>
        </div>
        
        <!-- Success/Error Messages -->
        <div *ngIf="submitMessage" class="submit-message" [class.success]="submitSuccess" [class.error]="!submitSuccess">
          {{ submitMessage }}
        </div>
      </form>
    </section>
  `
})
export class InquiryFormComponent implements OnInit {
  step = 0;
  isSubmitting = false;
  submitSuccess = false;
  submitMessage = '';
  
  steps = [
    'Contact Info',
    'Project Details',
    'Features & Design',
    'Timeline & Budget',
    'Current Website',
    'Additional Details',
    'Review & Submit'
  ];
  goalsList = [
    'Increase online presence',
    'Generate leads/sales',
    'Showcase portfolio/services',
    'Sell products online',
    'Improve user experience',
    'Mobile optimization',
    'SEO improvement'
  ];
  featuresList = [
    'Contact forms',
    'Online booking/scheduling',
    'Payment processing',
    'User accounts/login',
    'Blog/news section',
    'Photo galleries',
    'Social media integration',
    'Email newsletter signup',
    'Search functionality',
    'Multi-language support',
    'Analytics tracking'
  ];
  stylesList = [
    'Modern/minimalist',
    'Creative/artistic',
    'Professional/corporate',
    'Playful/colorful',
    'Industry-specific design',
    'Not sure - need guidance'
  ];
  reviewFields = [
    { label: 'Name', key: 'from_name' },
    { label: 'Email', key: 'from_email' },
    { label: 'Company', key: 'company_name' },
    { label: 'Phone', key: 'phone' },
    { label: 'Preferred Contact', key: 'contact_method' },
    { label: 'Project Type', key: 'project_type' },
    { label: 'Description', key: 'project_description' },
    { label: 'Goals', key: 'goals' },
    { label: 'Required Features', key: 'features' },
    { label: 'Design Styles', key: 'styles' },
    { label: 'Budget', key: 'budget' },
    { label: 'Timeline', key: 'timeline' },
    { label: 'Has Website', key: 'has_website' },
    { label: 'Website URL', key: 'website_url' },
    { label: 'Current Host', key: 'current_host' },
    { label: 'Branding', key: 'branding' },
    { label: 'Content Status', key: 'content_status' },
    { label: 'Reference Websites', key: 'reference_websites' },
    { label: 'Special Requirements', key: 'special_requirements' },
    { label: 'How did you hear about us', key: 'hear_about_us' },
    { label: 'Additional Comments', key: 'additional_comments' }
  ];

  inquiryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inquiryForm = this.fb.group({
      from_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      company_name: [''],
      phone: [''],
      contact_method: ['', Validators.required],
      project_type: ['', Validators.required],
      project_description: ['', Validators.required],
      goals: [[]],
      goals_other: [''],
      features: [[]],
      features_other: [''],
      styles: [[]],
      budget: ['', Validators.required],
      timeline: ['', Validators.required],
      has_website: ['', Validators.required],
      website_url: [''],
      current_host: [''],
      branding: ['', Validators.required],
      branding_details: [''],
      content_status: ['', Validators.required],
      reference_websites: [''],
      special_requirements: [''],
      hear_about_us: [''],
      hear_about_us_other: [''],
      additional_comments: ['']
    });
  }

  ngOnInit() {
    // Initialize EmailJS with your public key
    emailjs.init(environment.emailService.publicKey);
  }

  nextStep() {
    if (this.step < this.steps.length - 1) {
      this.step++;
    }
  }

  prevStep() {
    if (this.step > 0) {
      this.step--;
    }
  }

  onGoalChange(event: any) {
    const goals = this.inquiryForm.value.goals as string[];
    if (event.target.checked) {
      this.inquiryForm.patchValue({ goals: [...goals, event.target.value] });
    } else {
      this.inquiryForm.patchValue({ goals: goals.filter(g => g !== event.target.value) });
    }
  }

  onFeatureChange(event: any) {
    const features = this.inquiryForm.value.features as string[];
    if (event.target.checked) {
      this.inquiryForm.patchValue({ features: [...features, event.target.value] });
    } else {
      this.inquiryForm.patchValue({ features: features.filter(f => f !== event.target.value) });
    }
  }

  onStyleChange(event: any) {
    const styles = this.inquiryForm.value.styles as string[];
    if (event.target.checked) {
      this.inquiryForm.patchValue({ styles: [...styles, event.target.value] });
    } else {
      this.inquiryForm.patchValue({ styles: styles.filter(s => s !== event.target.value) });
    }
  }

  async onSubmit() {
    if (this.inquiryForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';
      
      try {
        console.log('📧 Sending inquiry emails with data:', this.inquiryForm.value);
        
        // Prepare email parameters for both emails
        const adminEmailParams = {
          to_email: 'admin@chapadevs.com',
          from_name: `${this.inquiryForm.value.from_name} (Chapadevs Inquiry)`,
          from_email: this.inquiryForm.value.from_email,
          reply_to: this.inquiryForm.value.from_email,
          customer_email: this.inquiryForm.value.from_email,
          customer_name: this.inquiryForm.value.from_name,
          company_name: this.inquiryForm.value.company_name || 'Not provided',
          phone: this.inquiryForm.value.phone || 'Not provided',
          contact_method: this.inquiryForm.value.contact_method,
          project_type: this.inquiryForm.value.project_type,
          project_description: this.inquiryForm.value.project_description,
          goals: this.inquiryForm.value.goals.join(', ') || 'Not specified',
          goals_other: this.inquiryForm.value.goals_other || '',
          features: this.inquiryForm.value.features.join(', ') || 'Not specified',
          features_other: this.inquiryForm.value.features_other || '',
          styles: this.inquiryForm.value.styles.join(', ') || 'Not specified',
          budget: this.inquiryForm.value.budget,
          timeline: this.inquiryForm.value.timeline,
          has_website: this.inquiryForm.value.has_website,
          website_url: this.inquiryForm.value.website_url || 'Not provided',
          current_host: this.inquiryForm.value.current_host || 'Not provided',
          branding: this.inquiryForm.value.branding,
          branding_details: this.inquiryForm.value.branding_details || 'Not provided',
          content_status: this.inquiryForm.value.content_status,
          reference_websites: this.inquiryForm.value.reference_websites || 'Not provided',
          special_requirements: this.inquiryForm.value.special_requirements || 'None',
          hear_about_us: this.inquiryForm.value.hear_about_us || 'Not specified',
          hear_about_us_other: this.inquiryForm.value.hear_about_us_other || '',
          additional_comments: this.inquiryForm.value.additional_comments || 'None',
          submission_date: new Date().toLocaleString()
        };

        // Prepare user confirmation email parameters
        const userEmailParams = {
          customer_email: this.inquiryForm.value.from_email,
          customer_name: this.inquiryForm.value.from_name,
          company_name: this.inquiryForm.value.company_name || '',
          project_type: this.inquiryForm.value.project_type,
          budget: this.inquiryForm.value.budget,
          timeline: this.inquiryForm.value.timeline,
          contact_method: this.inquiryForm.value.contact_method,
          submission_date: new Date().toLocaleDateString()
        };

        console.log('📤 Sending admin notification email...');
        
        // Send admin notification email
        const adminResult = await emailjs.send(
          environment.emailService.serviceId,
          environment.emailService.templateId,
          adminEmailParams
        );
        
        console.log('✅ Admin email sent successfully:', adminResult);

        console.log('📤 Sending user confirmation email...');
        
        // Send user confirmation email
        const userResult = await emailjs.send(
          environment.emailService.serviceId,
          environment.emailService.userTemplateId,
          userEmailParams
        );
        
        console.log('✅ User confirmation email sent successfully:', userResult);
        
        // Show success message
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.submitMessage = 'Thank you! Your inquiry has been submitted successfully. We\'ve also sent you a confirmation email. We\'ll get back to you within 24 hours.';
        
        // Reset form after successful submission
        setTimeout(() => {
          this.inquiryForm.reset();
          this.step = 0;
          this.submitMessage = '';
        }, 5000);
        
      } catch (error) {
        console.error('❌ Error sending emails:', error);
        this.isSubmitting = false;
        this.submitSuccess = false;
        this.submitMessage = 'Sorry, there was an error sending your inquiry. Please try again or contact us directly.';
      }
    }
  }
} 