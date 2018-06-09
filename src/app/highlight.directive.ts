import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective{

    color: string = 'rgb(37, 109, 121)';

    constructor(
        private elementRef: ElementRef
    ){

    }

    @HostListener('mouseenter') onMouseEnter(){
        this.elementRef.nativeElement.style.borderColor = this.color;
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.elementRef.nativeElement.style.borderColor = null;
    }

}