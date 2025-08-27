import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true,
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  
  scrollToFaq(): void {
    const faqElement = document.querySelector('app-faq');
    if (faqElement) {
      faqElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }
  
  scrollToInquiry(): void {
    const inquiryElement = document.querySelector('app-inquiry-form');
    if (inquiryElement) {
      inquiryElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }
}
