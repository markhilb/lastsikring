import { Component } from "@angular/core";
import CardComponent from "../../components/card/card.component";
import { GrimesikringWeightComponent } from "../../components/grimesikring-weight/grimesikring-weight.component";
import { OverfallsikringStrapsComponent } from "../../components/overfallsikring-straps/overfallsikring-straps.component";
import { OverfallsikringWeightComponent } from "../../components/overfallsikring-weight/overfallsikring-weight.component";

@Component({
  selector: "app-home-page",
  imports: [
    CardComponent,
    OverfallsikringWeightComponent,
    OverfallsikringStrapsComponent,
    GrimesikringWeightComponent,
  ],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
})
export class HomePageComponent {}
