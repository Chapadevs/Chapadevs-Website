import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = [
    {
      question: 'What services does ChaPaDevs offer?',
      answer: 'We specialize in creating high-quality websites, IT consulting, and full-stack development services. Our team handles everything from frontend design to backend development and deployment.',
      isOpen: false
    },
    {
      question: 'How long does it take to complete a website project?',
      answer: 'Project timelines vary depending on complexity, but we typically deliver websites within 2-4 weeks. We prioritize quick delivery while maintaining high quality standards.',
      isOpen: false
    },
    {
      question: 'Do you provide ongoing support after website delivery?',
      answer: 'Yes, we offer post-launch support and maintenance services. We ensure your website continues to perform optimally and can help with updates and improvements.',
      isOpen: false
    },
    {
      question: 'What technologies do you use for development?',
      answer: 'We use modern technologies including Angular for frontend, Java Spring Boot for backend, and deploy exclusively on Oracle infrastructure for reliable performance.',
      isOpen: false
    },
    {
      question: 'Can you work with existing websites or only create new ones?',
      answer: 'We can both create new websites from scratch and work with existing ones. We offer redesign, optimization, and enhancement services for current websites.',
      isOpen: false
    },
    {
      question: 'How do you handle project communication and updates?',
      answer: 'We maintain clear communication throughout the project with regular updates, milestone reviews, and direct access to our development team. We use modern collaboration tools to keep you informed.',
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
