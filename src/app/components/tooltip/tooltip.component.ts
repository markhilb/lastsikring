import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-tooltip",
  imports: [],
  templateUrl: "./tooltip.component.html",
  styleUrl: "./tooltip.component.scss",
})
export class TooltipComponent implements AfterViewInit, OnChanges {
  @Input() value?: string | number;

  @ViewChild("tooltip") tooltip?: ElementRef;

  hover = false;

  constructor(
    private ref: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnChanges(): void {
    if (this.tooltip) {
      this.stuff(this.tooltip);
    }
  }

  ngAfterViewInit(): void {
    if (this.tooltip) {
      this.stuff(this.tooltip);
    }
  }

  stuff(ref: ElementRef) {
    const elem = ref.nativeElement as HTMLDivElement;
    const { x } = elem.getBoundingClientRect();

    if (x < 0) {
      elem.style.left = `calc(50% + ${-x}px)`;
    } else {
      elem.style.left = "50%";
    }

    this.cdr.detectChanges();
  }

  @HostListener("document:touchstart", ["$event"])
  onClick(event: Event) {
    this.hover = this.ref.nativeElement.contains(event.target);
  }
}
