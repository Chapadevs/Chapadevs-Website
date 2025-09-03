import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import emailjs from "@emailjs/browser";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-inquiry-form",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./inquiry-form.component.html",
  styleUrls: ["./inquiry-form.component.scss"],
})
export class InquiryFormComponent implements OnInit {
  step = 0;
  isSubmitting = false;
  submitSuccess = false;
  submitMessage = "";

  steps = [
    "Contact Info",
    "Project Details",
    "Features & Design",
    "Timeline & Budget",
    "Current Website",
    "Additional Details",
    "Review & Submit",
  ];
  goalsList = [
    "Increase online presence",
    "Generate leads/sales",
    "Showcase portfolio/services",
    "Sell products online",
    "Improve user experience",
    "Mobile optimization",
    "SEO improvement",
  ];
  featuresList = [
    "Contact forms",
    "Online booking/scheduling",
    "Payment processing",
    "User accounts/login",
    "Blog/news section",
    "Photo galleries",
    "Social media integration",
    "Email newsletter signup",
    "Search functionality",
    "Multi-language support",
    "Analytics tracking",
  ];
  stylesList = [
    "Modern/minimalist",
    "Creative/artistic",
    "Professional/corporate",
    "Playful/colorful",
    "Industry-specific design",
    "Not sure - need guidance",
  ];
  reviewFields = [
    { label: "Name", key: "from_name" },
    { label: "Email", key: "from_email" },
    { label: "Company", key: "company_name" },
    { label: "Phone", key: "phone" },
    { label: "Preferred Contact", key: "contact_method" },
    { label: "Project Type", key: "project_type" },
    { label: "Description", key: "project_description" },
    { label: "Goals", key: "goals" },
    { label: "Required Features", key: "features" },
    { label: "Design Styles", key: "styles" },
    { label: "Budget", key: "budget" },
    { label: "Timeline", key: "timeline" },
    { label: "Has Website", key: "has_website" },
    { label: "Website URL", key: "website_url" },
    { label: "Current Host", key: "current_host" },
    { label: "Branding", key: "branding" },
    { label: "Content Status", key: "content_status" },
    { label: "Reference Websites", key: "reference_websites" },
    { label: "Special Requirements", key: "special_requirements" },
    { label: "How did you hear about us", key: "hear_about_us" },
    { label: "Additional Comments", key: "additional_comments" },
  ];

  inquiryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inquiryForm = this.fb.group({
      from_name: ["", Validators.required],
      from_email: ["", [Validators.required, Validators.email]],
      company_name: [""],
      phone: [""],
      contact_method: ["", Validators.required],
      project_type: ["", Validators.required],
      project_description: ["", Validators.required],
      goals: [[]],
      goals_other: [""],
      features: [[]],
      features_other: [""],
      styles: [[]],
      budget: ["", Validators.required],
      timeline: ["", Validators.required],
      has_website: ["", Validators.required],
      website_url: [""],
      current_host: [""],
      branding: ["", Validators.required],
      branding_details: [""],
      content_status: ["", Validators.required],
      reference_websites: [""],
      special_requirements: [""],
      hear_about_us: [""],
      hear_about_us_other: [""],
      additional_comments: [""],
    });
  }

  ngOnInit() {
    // Initialize EmailJS with your public key
    emailjs.init(environment.emailService.publicKey);
  }

  // Email validation function
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Mobile-friendly field touch handling
  onFieldTouch(fieldName: string) {
    this.inquiryForm.get(fieldName)?.markAsTouched();
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
      this.inquiryForm.patchValue({
        goals: goals.filter((g) => g !== event.target.value),
      });
    }
  }

  onFeatureChange(event: any) {
    const features = this.inquiryForm.value.features as string[];
    if (event.target.checked) {
      this.inquiryForm.patchValue({
        features: [...features, event.target.value],
      });
    } else {
      this.inquiryForm.patchValue({
        features: features.filter((f) => f !== event.target.value),
      });
    }
  }

  onStyleChange(event: any) {
    const styles = this.inquiryForm.value.styles as string[];
    if (event.target.checked) {
      this.inquiryForm.patchValue({ styles: [...styles, event.target.value] });
    } else {
      this.inquiryForm.patchValue({
        styles: styles.filter((s) => s !== event.target.value),
      });
    }
  }

  async onSubmit() {
    if (this.inquiryForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = "";

      try {


        // Validate email format before sending
        const customerEmail = this.inquiryForm.value.from_email?.trim();
        if (!customerEmail || !this.isValidEmail(customerEmail)) {
          throw new Error('Invalid email address format');
        }

        // Prepare email parameters for both emails
        const adminEmailParams = {
          to_email: "admin@chapadevs.com",
          from_name: `${this.inquiryForm.value.from_name} (Chapadevs Inquiry)`,
          from_email: customerEmail,
          reply_to: customerEmail,
          customer_email: customerEmail,
          customer_name: this.inquiryForm.value.from_name,
          company_name: this.inquiryForm.value.company_name || "Not provided",
          phone: this.inquiryForm.value.phone || "Not provided",
          contact_method: this.inquiryForm.value.contact_method,
          project_type: this.inquiryForm.value.project_type,
          project_description: this.inquiryForm.value.project_description,
          goals: this.inquiryForm.value.goals.join(", ") || "Not specified",
          goals_other: this.inquiryForm.value.goals_other || "",
          features:
            this.inquiryForm.value.features.join(", ") || "Not specified",
          features_other: this.inquiryForm.value.features_other || "",
          styles: this.inquiryForm.value.styles.join(", ") || "Not specified",
          budget: this.inquiryForm.value.budget,
          timeline: this.inquiryForm.value.timeline,
          has_website: this.inquiryForm.value.has_website,
          website_url: this.inquiryForm.value.website_url || "Not provided",
          current_host: this.inquiryForm.value.current_host || "Not provided",
          branding: this.inquiryForm.value.branding,
          branding_details:
            this.inquiryForm.value.branding_details || "Not provided",
          content_status: this.inquiryForm.value.content_status,
          reference_websites:
            this.inquiryForm.value.reference_websites || "Not provided",
          special_requirements:
            this.inquiryForm.value.special_requirements || "None",
          hear_about_us:
            this.inquiryForm.value.hear_about_us || "Not specified",
          hear_about_us_other: this.inquiryForm.value.hear_about_us_other || "",
          additional_comments:
            this.inquiryForm.value.additional_comments || "None",
          submission_date: new Date().toLocaleString(),
        };

        // Prepare user confirmation email parameters
        const userEmailParams = {
          customer_email: customerEmail,
          customer_name: this.inquiryForm.value.from_name,
          company_name: this.inquiryForm.value.company_name || "",
          project_type: this.inquiryForm.value.project_type,
          budget: this.inquiryForm.value.budget,
          timeline: this.inquiryForm.value.timeline,
          contact_method: this.inquiryForm.value.contact_method,
          submission_date: new Date().toLocaleDateString(),
        };



        // Send admin notification email
        const adminResult = await emailjs.send(
          environment.emailService.serviceId,
          environment.emailService.templateId,
          adminEmailParams
        );





        // Send user confirmation email
        const userResult = await emailjs.send(
          environment.emailService.serviceId,
          environment.emailService.userTemplateId,
          userEmailParams
        );



        // Show success message
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.submitMessage =
          "Thank you! Your inquiry has been submitted successfully. We've also sent you a confirmation email. We'll get back to you within 24 hours.";

        // Reset form after successful submission
        setTimeout(() => {
          this.inquiryForm.reset();
          this.step = 0;
          this.submitMessage = "";
        }, 5000);
      } catch (error) {
        console.error("❌ Error sending emails:", error);
        this.isSubmitting = false;
        this.submitSuccess = false;
        
        // Provide more specific error messages
        if (error instanceof Error && error.message === 'Invalid email address format') {
          this.submitMessage = "Please enter a valid email address.";
        } else if (error && typeof error === 'object' && 'text' in error) {
          this.submitMessage = `Email sending failed: ${(error as any).text}. Please check your email address and try again.`;
        } else {
          this.submitMessage = "Sorry, there was an error sending your inquiry. Please try again or contact us directly.";
        }
      }
    }
  }
}
