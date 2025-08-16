import { AfterViewInit, Component } from "@angular/core";

@Component({
  selector: "app-ai",
  standalone: true,
  templateUrl: "./ai.component.html",
  styleUrls: ["./ai.component.scss"],
})
export class AiComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initFloatingAnimations();
  }

  private initFloatingAnimations() {
    // Apply floating animations immediately with staggered delays
    const steps = document.querySelectorAll(".flow-step");
    
    steps.forEach((step, index) => {
      setTimeout(() => {
        if (index % 2 === 0) {
          step.classList.add("animate-slide-left");
        } else {
          step.classList.add("animate-slide-right");
        }
      }, index * 300); // 300ms delay between each step
    });

    // Apply fade-up animation to header
    const header = document.querySelector(".section-header");
    if (header) {
      setTimeout(() => {
        header.classList.add("animate-fade-up");
      }, 100);
    }
  }
}
