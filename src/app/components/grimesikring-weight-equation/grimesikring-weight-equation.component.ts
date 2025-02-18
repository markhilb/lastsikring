import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

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

  g = 9.81;
  fmu = 0.75;
  cz = 1;

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
      this.cxy === undefined ||
      this.fmu === undefined
    ) {
      return undefined;
    }

    const denominator =
      this.g * (this.cxy - this.friction * this.cz * this.fmu);

    if (denominator === 0) {
      return -1;
    }

    const numenator =
      2 *
      this.numStraps *
      this.fr *
      (this.friction * this.fmu * this.alpha.sin() +
        this.alpha.cos() * this.beta.cos());

    return Math.round(1000 * (numenator / denominator));
  }
}
