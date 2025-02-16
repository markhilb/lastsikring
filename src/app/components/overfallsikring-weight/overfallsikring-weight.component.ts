import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NumberInputComponent } from "../number-input/number-input.component";
import { OverfallsikringEquationComponent } from "../overfallsikring-equation/overfallsikring-equation.component";

@Component({
  selector: "app-overfallsikring-weight",
  imports: [
    CommonModule,
    NumberInputComponent,
    OverfallsikringEquationComponent,
  ],
  templateUrl: "./overfallsikring-weight.component.html",
  styleUrl: "./overfallsikring-weight.component.scss",
})
export class OverfallsikringWeightComponent {
  Math = Math;

  numStraps? = 4;
  friction? = 0.55;
  ft? = 10;
  alpha? = 90;

  g = 9.81;
  cx = 0.8;
  cy = 0.5;
  fsx = 1.25;
  fsy = 1.1;
  cz = 1;
}
