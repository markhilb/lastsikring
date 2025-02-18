import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { VariablesService } from "../../services/variables.service";
import { AlertComponent } from "../alert/alert.component";

@Component({
  selector: "app-overfallsikring-weight-equation",
  imports: [CommonModule, AlertComponent],
  templateUrl: "./overfallsikring-weight-equation.component.html",
  styleUrl: "./overfallsikring-weight-equation.component.scss",
})
export class OverfallsikringWeightEquationComponent {
  @Input() numStraps?: number;
  @Input() friction?: number;
  @Input() stf?: number;
  @Input("alpha") _alpha?: number;

  @Input() cxy?: number;
  @Input() fsxy?: number;

  get ft() {
    return this.stf !== undefined ? this.stf / 100 : undefined;
  }

  get alpha() {
    return this._alpha?.toRadians().sin();
  }

  get result() {
    if (
      this.numStraps === undefined ||
      this.friction === undefined ||
      this.ft === undefined ||
      this.alpha === undefined ||
      this.cxy === undefined ||
      this.fsxy === undefined
    ) {
      return undefined;
    }

    const denominator =
      this.vars.g * (this.cxy - this.friction * this.vars.cz) * this.fsxy;

    if (denominator === 0) {
      return -1;
    }

    const numenator = 2 * this.numStraps * this.friction * this.alpha * this.ft;

    return Math.round(1000 * (numenator / denominator));
  }

  get percent() {
    const weight = this.vars.weight;
    const result = this.result;

    if (
      weight === undefined ||
      weight <= 0 ||
      result === undefined ||
      result < 0
    ) {
      return undefined;
    }

    return Math.min((100 * result) / weight, 100);
  }

  get alertVariant() {
    const percent = this.percent;
    return percent === undefined
      ? undefined
      : percent === 100
        ? "success"
        : percent < 50
          ? "error"
          : "warn";
  }

  constructor(public vars: VariablesService) {}
}
