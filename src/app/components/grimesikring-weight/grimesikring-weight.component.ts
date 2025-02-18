import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { VariablesService } from "../../services/variables.service";
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
  lc? = 1000;
  alpha? = 0;
  beta? = 0;

  constructor(public vars: VariablesService) {}
}
