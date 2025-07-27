import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-hero",
  standalone: true,
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"],
})
export class HeroComponent {
  constructor(private router: Router) {}

  scrollToInquiryForm() {
    const el = document.getElementById("inquiry-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  goToPortfolio() {
    this.router.navigate(["/portfolio"]);
  }
}
