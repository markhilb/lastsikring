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
  @Input() ft?: number;
  @Input("alpha") _alpha?: number;

  @Input() cxy?: number;
  @Input() fsxy?: number;

  g = 9.81;
  cz = 1;

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

    return (
      1000 *
      ((2 * this.numStraps * this.friction * this.alpha * this.ft) /
        (this.g * (this.cxy - this.friction * this.cz) * this.fsxy))
    );
  }
}
