import { Component } from "@angular/core";
import { NumberInputComponent } from "../number-input/number-input.component";
import { OverfallsikringStrapsEquationComponent } from "../overfallsikring-straps-equation/overfallsikring-straps-equation.component";

@Component({
  selector: "app-overfallsikring-straps",
  imports: [NumberInputComponent, OverfallsikringStrapsEquationComponent],
  templateUrl: "./overfallsikring-straps.component.html",
  styleUrl: "./overfallsikring-straps.component.scss",
})
export class OverfallsikringStrapsComponent {
  weight? = 28;
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
