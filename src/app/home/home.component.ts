import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AiComponent } from "../ai/ai.component";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { InquiryFormComponent } from "../inquiry-form/inquiry-form.component";
import { ServicesComponent } from "../our-services/our-services.component";
import { WorkComponent } from "../our-work/our-work.component";
import { TeamComponent } from "../team/team.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    TeamComponent,
    WorkComponent,
    AiComponent,
    InquiryFormComponent,
    FooterComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {}
