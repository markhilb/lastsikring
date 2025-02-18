import { Component } from "@angular/core";
import { VariablesService } from "../../services/variables.service";
import { NumberInputComponent } from "../number-input/number-input.component";
import { OverfallsikringStrapsEquationComponent } from "../overfallsikring-straps-equation/overfallsikring-straps-equation.component";

@Component({
  selector: "app-overfallsikring-straps",
  imports: [NumberInputComponent, OverfallsikringStrapsEquationComponent],
  templateUrl: "./overfallsikring-straps.component.html",
  styleUrl: "./overfallsikring-straps.component.scss",
})
export class OverfallsikringStrapsComponent {
  constructor(public vars: VariablesService) {}
}
