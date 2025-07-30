import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AiComponent } from "../ai/ai.component";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { InquiryFormComponent } from "../inquiry-form/inquiry-form.component";
import { MaintenanceComponent } from "../maintenance/maintenance.component";
import { TeamComponent } from "../team/team.component";
import { WorkComponent } from "../work/work.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    WorkComponent,
    TeamComponent,
    MaintenanceComponent,
    AiComponent,
    InquiryFormComponent,
    FooterComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {}
