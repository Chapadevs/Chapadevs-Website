import { AfterViewInit, Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-our-services",
  standalone: true,
  templateUrl: "./our-services.component.html",
  styleUrls: ["./our-services.component.scss"],
})
export class OurServicesComponent implements OnInit, AfterViewInit {
  scrollProgress = 0; // 0 to 1, represents animation progress for mobile column
  monitorScrollProgress = 0; // 0 to 1, represents animation progress for monitor column
  laptopScrollProgress = 0; // 0 to 1, represents animation progress for laptop column

  ngOnInit() {
    // Initial check
    setTimeout(() => this.updateScrollProgress(), 100);
  }

  ngAfterViewInit() {
    // Check again after view is initialized
    setTimeout(() => this.updateScrollProgress(), 200);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.updateScrollProgress();
  }

  private updateScrollProgress() {
    // Update mobile column animation
    const mobileElement = document.querySelector('.mobile-column');
    if (mobileElement) {
      const rect = mobileElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress based on element visibility
      // Start animation when element enters viewport (top < windowHeight * 0.8)
      // Complete animation when element is 20% visible (top < windowHeight * 0.2)
      const startPoint = windowHeight * 0.8;
      const endPoint = windowHeight * 0.2;
      const currentPosition = rect.top;
      
      if (currentPosition <= startPoint && currentPosition >= endPoint) {
        // Element is in the animation zone
        this.scrollProgress = (startPoint - currentPosition) / (startPoint - endPoint);
        this.scrollProgress = Math.max(0, Math.min(1, this.scrollProgress)); // Clamp between 0 and 1
      } else if (currentPosition < endPoint) {
        // Element is fully visible, animation complete
        this.scrollProgress = 1;
      } else {
        // Element is not yet in view, animation not started
        this.scrollProgress = 0;
      }
      
      console.log('Mobile scroll progress:', this.scrollProgress, 'Element position:', currentPosition);
    }

    // Update monitor column animation
    const monitorElement = document.querySelector('.monitor-column');
    if (monitorElement) {
      const rect = monitorElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress based on element visibility
      // Start animation when element enters viewport (top < windowHeight * 0.8)
      // Complete animation when element is 20% visible (top < windowHeight * 0.2)
      const startPoint = windowHeight * 0.8;
      const endPoint = windowHeight * 0.2;
      const currentPosition = rect.top;
      
      if (currentPosition <= startPoint && currentPosition >= endPoint) {
        // Element is in the animation zone
        this.monitorScrollProgress = (startPoint - currentPosition) / (startPoint - endPoint);
        this.monitorScrollProgress = Math.max(0, Math.min(1, this.monitorScrollProgress)); // Clamp between 0 and 1
      } else if (currentPosition < endPoint) {
        // Element is fully visible, animation complete
        this.monitorScrollProgress = 1;
      } else {
        // Element is not yet in view, animation not started
        this.monitorScrollProgress = 0;
      }
      
      console.log('Monitor scroll progress:', this.monitorScrollProgress, 'Element position:', currentPosition);
    }

    // Update laptop column animation (fade-in only, no scaling)
    const laptopElement = document.querySelector('.laptop-column');
    if (laptopElement) {
      const rect = laptopElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress based on element visibility
      // Start animation when element enters viewport (top < windowHeight * 0.8)
      // Complete animation when element is 20% visible (top < windowHeight * 0.2)
      const startPoint = windowHeight * 0.8;
      const endPoint = windowHeight * 0.2;
      const currentPosition = rect.top;
      
      if (currentPosition <= startPoint && currentPosition >= endPoint) {
        // Element is in the animation zone
        this.laptopScrollProgress = (startPoint - currentPosition) / (startPoint - endPoint);
        this.laptopScrollProgress = Math.max(0, Math.min(1, this.laptopScrollProgress)); // Clamp between 0 and 1
      } else if (currentPosition < endPoint) {
        // Element is fully visible, animation complete
        this.laptopScrollProgress = 1;
      } else {
        // Element is not yet in view, animation not started
        this.laptopScrollProgress = 0;
      }
      
      console.log('Laptop scroll progress:', this.laptopScrollProgress, 'Element position:', currentPosition);
    }
  }
}
