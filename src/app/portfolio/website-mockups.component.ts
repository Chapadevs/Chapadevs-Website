import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-website-mockup",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./website-mockups.component.html",
  styleUrls: ["./website-mockups.component.scss"],
})
export class WebsiteMockupComponent {
  @Input() projectId!: number;

  getUrl(): string {
    const urls = [
      "",
      "techcorp-store.com",
      "app.medflow.health",
      "globalfinance.com",
      "app.ecotrack.green",
      "foodieconnect.app",
      "fleet.smartlogistics.com",
    ];
    return urls[this.projectId] || "";
  }

  getClass(): string {
    const classes = [
      "",
      "ecommerce",
      "healthcare",
      "corporate",
      "sustainability",
      "social",
      "logistics",
    ];
    return classes[this.projectId] || "";
  }
}
