import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { VariablesService } from "../../services/variables.service";

@Component({
  selector: "app-grimesikring-weight-equation",
  imports: [CommonModule],
  templateUrl: "./grimesikring-weight-equation.component.html",
  styleUrl: "./grimesikring-weight-equation.component.scss",
})
export class GrimesikringWeightEquationComponent {
  @Input() numStraps?: number;
  @Input() friction?: number;
  @Input() lc?: number;
  @Input("alpha") _alpha?: number;
  @Input("beta") _beta?: number;

  @Input() cxy?: number;

  get fr() {
    return this.lc !== undefined ? this.lc / 100 : undefined;
  }

  get alpha() {
    return this._alpha?.toRadians();
  }

  get beta() {
    return this._beta?.toRadians();
  }

  get result() {
    if (
      this.numStraps === undefined ||
      this.friction === undefined ||
      this.fr === undefined ||
      this.alpha === undefined ||
      this.beta === undefined ||
      this.cxy === undefined
    ) {
      return undefined;
    }

    const denominator =
      this.vars.g * (this.cxy - this.friction * this.vars.cz * this.vars.fmu);

    if (denominator === 0) {
      return -1;
    }

    const numenator =
      2 *
      this.numStraps *
      this.fr *
      (this.friction * this.vars.fmu * this.alpha.sin() +
        this.alpha.cos() * this.beta.cos());

    return Math.round(1000 * (numenator / denominator));
  }

  get percent() {
    const weight = this.vars.weight;
    const result = this.result;

    if (
      weight === undefined ||
      weight <= 0 ||
      result === undefined ||
      result === null ||
      result < 0
    ) {
      return undefined;
    }

    return Math.min((100 * result) / weight, 100);
  }

  constructor(public vars: VariablesService) {}
}
