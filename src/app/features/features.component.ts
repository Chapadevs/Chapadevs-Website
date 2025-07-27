import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  template: `
    <section class="features-section">
      <header class="section-header">
        <span class="section-badge">AI + Human Expertise</span>
        <h2 class="section-title">AI-POWERED, HUMAN-CONTROLLED</h2>
        <p class="section-description">
          We leverage cutting-edge AI tools while maintaining complete human oversight. Every decision, design, and line of code is reviewed by our expert team.
        </p>
      </header>
      <div class="flow-container">
        <div class="flow-timeline">
          <article class="flow-step">
            <div class="step-number">1</div>
            <h3 class="step-title">AI Analysis</h3>
            <p class="step-description">
              Advanced AI tools analyze your business needs and technical requirements for optimal solutions.
            </p>
            <div class="tools-list">
              <span class="tool-tag">Cursor AI</span>
              <span class="tool-tag">Analytics</span>
              <span class="tool-tag">Research</span>
            </div>
          </article>
          
          <article class="flow-step">
            <div class="step-number">2</div>
            <h3 class="step-title">Design Generation</h3>
            <p class="step-description">
              Lovable AI generates stunning designs while our team ensures professional standards and brand alignment.
            </p>
            <div class="tools-list">
              <span class="tool-tag">Lovable AI</span>
              <span class="tool-tag">Figma</span>
              <span class="tool-tag">Branding</span>
            </div>
          </article>
          
          <article class="flow-step">
            <div class="step-number">3</div>
            <h3 class="step-title">Human Review</h3>
            <p class="step-description">
              Every component undergoes thorough human review, testing, and optimization by our expert team.
            </p>
            <div class="tools-list">
              <span class="tool-tag">Angular</span>
              <span class="tool-tag">Spring Boot</span>
              <span class="tool-tag">Testing</span>
            </div>
          </article>
          
          <article class="flow-step">
            <div class="step-number">4</div>
            <h3 class="step-title">Performance</h3>
            <p class="step-description">
              Continuous monitoring and optimization ensure maximum performance, SEO, and user experience.
            </p>
            <div class="tools-list">
              <span class="tool-tag">Analytics</span>
              <span class="tool-tag">Search Console</span>
              <span class="tool-tag">Monitoring</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    this.initScrollAnimations();
  }

  private initScrollAnimations() {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers - show all elements immediately
      this.showAllElements();
      return;
    }

    // Create observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add animation class based on element type
          if (entry.target.classList.contains('section-header')) {
            // Animate header with fade up
            setTimeout(() => {
              entry.target.classList.add('animate-fade-up');
            }, 100);
          } else if (entry.target.classList.contains('flow-step')) {
            // Stagger the animations for flow steps
            setTimeout(() => {
              if (index % 2 === 0) {
                entry.target.classList.add('animate-slide-left');
              } else {
                entry.target.classList.add('animate-slide-right');
              }
            }, index * 200); // 200ms delay between each step
          }
          
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3, // Trigger when 30% of element is visible
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
    });

    // Observe elements
    const header = document.querySelector('.section-header');
    const steps = document.querySelectorAll('.flow-step');
    
    if (header) {
      observer.observe(header);
    }
    
    steps.forEach(step => {
      observer.observe(step);
    });
  }

  private showAllElements() {
    // Fallback for browsers without Intersection Observer
    const header = document.querySelector('.section-header');
    const steps = document.querySelectorAll('.flow-step');
    
    if (header) {
      setTimeout(() => {
        header.classList.add('animate-fade-up');
      }, 100);
    }
    
    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index % 2 === 0) {
          step.classList.add('animate-slide-left');
        } else {
          step.classList.add('animate-slide-right');
        }
      }, index * 200);
    });
  }
} 