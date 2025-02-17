import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-number-input",
  imports: [],
  templateUrl: "./number-input.component.html",
  styleUrl: "./number-input.component.scss",
})
export class NumberInputComponent {
  @Input() value?: number;
  @Output() valueChange = new EventEmitter<number | undefined>();

  @Input() title?: string;
  @Input() min?: number;
  @Input() max?: number;
  @Input() step?: number;
  @Input() decimal = true;

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    let num = +value;

    if (value === "" || !Number.isFinite(num)) {
      this.valueChange.next(undefined);
      return;
    }

    if (this.min !== undefined && num < this.min) {
      num = this.min;
    }
    if (this.max !== undefined && num > this.max) {
      num = this.max;
    }
    if (!this.decimal) {
      num = Math.trunc(num);
    }

    target.value = num.toString();
    this.valueChange.emit(num);
  }
}
