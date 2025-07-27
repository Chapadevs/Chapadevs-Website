import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FeaturesComponent } from "../features/features.component";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { InquiryFormComponent } from "../inquiry-form/inquiry-form.component";
import { ServicesComponent } from "../services/services.component";
import { SupportComponent } from "../support/support.component";
import { TeamComponent } from "../team/team.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    TeamComponent,
    ServicesComponent,
    FeaturesComponent,
    SupportComponent,
    InquiryFormComponent,
    FooterComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {}
