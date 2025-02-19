import { Component, ElementRef, HostListener, Input } from "@angular/core";

@Component({
  selector: "app-tooltip",
  imports: [],
  templateUrl: "./tooltip.component.html",
  styleUrl: "./tooltip.component.scss",
})
export class TooltipComponent {
  @Input() value?: string | number;

  hover = false;

  constructor(private ref: ElementRef) {}

  @HostListener("document:touchstart", ["$event"])
  onClick(event: Event) {
    this.hover = this.ref.nativeElement.contains(event.target);
  }
}
