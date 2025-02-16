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
  @Input("fr") _fr?: number;
  @Input("alpha") _alpha?: number;
  @Input("beta") _beta?: number;

  @Input() cxy?: number;

  Math = Math;

  g = 9.81;
  fmu = 0.75;
  cz = 1;

  get fr() {
    return this._fr !== undefined ? this._fr * 1000 : undefined;
  }

  get alpha() {
    return this._alpha !== undefined
      ? (this._alpha * Math.PI) / 180
      : undefined;
  }

  get beta() {
    return this._beta !== undefined ? (this._beta * Math.PI) / 180 : undefined;
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

    return (
      (2 *
        this.numStraps *
        this.fr *
        (this.friction * this.fmu * Math.sin(this.alpha) +
          Math.cos(this.alpha) * Math.cos(this.beta))) /
      (this.g * (this.cxy - this.friction * this.cz * this.fmu))
    );
  }
}
