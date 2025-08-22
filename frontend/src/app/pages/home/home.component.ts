import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FaqComponent } from "../../components/faq/faq.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { InquiryFormComponent } from "../../components/inquiry-form/inquiry-form.component";
import { FooterComponent } from "../../layout/footer/footer.component";
import { HeaderComponent } from "../../layout/header/header.component";
import { AiComponent } from "../ai/ai.component";
import { OurServicesComponent } from "../our-services/our-services.component";
import { WorkComponent } from "../our-work/our-work.component";
import { TeamComponent } from "../team/team.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    OurServicesComponent,
    TeamComponent,
    WorkComponent,
    AiComponent,
    InquiryFormComponent,
    FaqComponent,
    FooterComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {}
