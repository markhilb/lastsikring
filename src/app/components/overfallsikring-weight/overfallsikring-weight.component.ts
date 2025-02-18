import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { VariablesService } from "../../services/variables.service";
import { NumberInputComponent } from "../number-input/number-input.component";
import { OverfallsikringWeightEquationComponent } from "../overfallsikring-weight-equation/overfallsikring-weight-equation.component";

@Component({
  selector: "app-overfallsikring-weight",
  imports: [
    CommonModule,
    NumberInputComponent,
    OverfallsikringWeightEquationComponent,
  ],
  templateUrl: "./overfallsikring-weight.component.html",
  styleUrl: "./overfallsikring-weight.component.scss",
})
export class OverfallsikringWeightComponent {
  constructor(public vars: VariablesService) {}
}
