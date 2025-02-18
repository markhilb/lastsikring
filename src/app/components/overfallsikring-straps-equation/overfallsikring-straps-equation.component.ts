import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { VariablesService } from "../../services/variables.service";

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
      return null;
    }

    const numenator =
      this.weight *
      this.vars.g *
      (this.cxy - this.friction * this.vars.cz) *
      this.fsxy;

    return Math.ceil(numenator / denominator);
  }

  get percent() {
    const numStraps = this.vars.numStraps;
    const result = this.result;

    if (
      numStraps === undefined ||
      numStraps <= 0 ||
      result === undefined ||
      result === null ||
      result < 0
    ) {
      return undefined;
    }

    return Math.min((100 * result) / numStraps, 100);
  }

  constructor(public vars: VariablesService) {}
}
