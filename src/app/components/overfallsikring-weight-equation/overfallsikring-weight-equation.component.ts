import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-overfallsikring-weight-equation",
  imports: [CommonModule],
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

  g = 9.81;
  cz = 1;

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
      this.g * (this.cxy - this.friction * this.cz) * this.fsxy;

    if (denominator === 0) {
      return -1;
    }

    const numenator = 2 * this.numStraps * this.friction * this.alpha * this.ft;

    return Math.round(1000 * (numenator / denominator));
  }
}
