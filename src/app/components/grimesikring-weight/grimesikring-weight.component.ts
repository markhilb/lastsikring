import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GrimesikringWeightEquationComponent } from "../grimesikring-weight-equation/grimesikring-weight-equation.component";
import { NumberInputComponent } from "../number-input/number-input.component";

@Component({
  selector: "app-grimesikring-weight",
  imports: [
    CommonModule,
    NumberInputComponent,
    GrimesikringWeightEquationComponent,
  ],
  templateUrl: "./grimesikring-weight.component.html",
  styleUrl: "./grimesikring-weight.component.scss",
})
export class GrimesikringWeightComponent {
  numStraps? = 4;
  friction? = 0.55;
  fr? = 10;
  alpha? = 0;
  beta? = 0;

  g = 9.81;
  cx = 0.8;
  cy = 0.5;
  fmux = 1.25;
  fmuy = 1.1;
  cz = 1;
}
