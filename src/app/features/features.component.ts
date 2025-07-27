import { AfterViewInit, Component } from "@angular/core";

@Component({
  selector: "app-features",
  standalone: true,
  templateUrl: "./features.component.html",
  styleUrls: ["./features.component.scss"],
})
export class FeaturesComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initScrollAnimations();
  }

  private initScrollAnimations() {
    // Check if Intersection Observer is supported
    if (!("IntersectionObserver" in window)) {
      // Fallback for older browsers - show all elements immediately
      this.showAllElements();
      return;
    }

    // Create observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add animation class based on element type
            if (entry.target.classList.contains("section-header")) {
              // Animate header with fade up
              setTimeout(() => {
                entry.target.classList.add("animate-fade-up");
              }, 100);
            } else if (entry.target.classList.contains("flow-step")) {
              // Stagger the animations for flow steps
              setTimeout(() => {
                if (index % 2 === 0) {
                  entry.target.classList.add("animate-slide-left");
                } else {
                  entry.target.classList.add("animate-slide-right");
                }
              }, index * 200); // 200ms delay between each step
            }

            // Stop observing after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of element is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element enters viewport
      }
    );

    // Observe elements
    const header = document.querySelector(".section-header");
    const steps = document.querySelectorAll(".flow-step");

    if (header) {
      observer.observe(header);
    }

    steps.forEach((step) => {
      observer.observe(step);
    });
  }

  private showAllElements() {
    // Fallback for browsers without Intersection Observer
    const header = document.querySelector(".section-header");
    const steps = document.querySelectorAll(".flow-step");

    if (header) {
      setTimeout(() => {
        header.classList.add("animate-fade-up");
      }, 100);
    }

    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index % 2 === 0) {
          step.classList.add("animate-slide-left");
        } else {
          step.classList.add("animate-slide-right");
        }
      }, index * 200);
    });
  }
}
