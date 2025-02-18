import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { VariablesService } from "../../services/variables.service";

@Component({
  selector: "app-equations-info",
  imports: [CommonModule],
  templateUrl: "./equations-info.component.html",
  styleUrl: "./equations-info.component.scss",
})
export class EquationsInfoComponent {
  constructor(public vars: VariablesService) {}
}
