import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-overfallsikring-straps-equation",
  imports: [CommonModule],
  templateUrl: "./overfallsikring-straps-equation.component.html",
  styleUrl: "./overfallsikring-straps-equation.component.scss",
})
export class OverfallsikringStrapsEquationComponent {
  @Input() weight?: number;
  @Input() friction?: number;
  @Input() ft?: number;
  @Input("alpha") _alpha?: number;

  @Input() cxy?: number;
  @Input() fsxy?: number;

  g = 9.81;
  cz = 1;

  get alpha() {
    return this._alpha !== undefined
      ? Math.sin((this._alpha * Math.PI) / 180)
      : undefined;
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

    return Math.ceil(
      (this.weight *
        this.g *
        (this.cxy - this.friction * this.cz) *
        this.fsxy) /
        (2 * this.friction * this.alpha * this.ft),
    );
  }
}
