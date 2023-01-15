import { AfterContentInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterContentInit {
    @Input() appHighlight = '';
    
    constructor(private el: ElementRef) {
       //this.el.nativeElement.style.backgroundColor = 'yellow';

    }
  ngAfterContentInit(): void {
    this.highlight('green')
  }

    @HostListener('mouseenter') onMouseEnter() {
      this.highlight(this.appHighlight);
    }
    
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight('');
    }
    
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
}