import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-overfallsikring-straps-equation",
  imports: [CommonModule],
  templateUrl: "./overfallsikring-straps-equation.component.html",
  styleUrl: "./overfallsikring-straps-equation.component.scss",
})
export class OverfallsikringStrapsEquationComponent {
  @Input("weight") _weight?: number;
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

  get weight() {
    return this._weight !== undefined ? this._weight / 1000 : undefined;
  }

  get alpha() {
    return this._alpha?.toRadians().sin();
  }

  get result() {
    if (
      this.weight === undefined ||
      this.friction === undefined ||
      this.ft === undefined ||
      this.alpha === undefined ||
      this.cxy === undefined ||
      this.fsxy === undefined
    ) {
      return undefined;
    }
    const denominator = 2 * this.friction * this.alpha * this.ft;

    if (denominator === 0) {
      return -1;
    }

    const numenator =
      this.weight * this.g * (this.cxy - this.friction * this.cz) * this.fsxy;

    return Math.ceil(numenator / denominator);
  }
}
