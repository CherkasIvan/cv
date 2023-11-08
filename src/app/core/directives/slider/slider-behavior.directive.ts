import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[cvSliderBehavior]',
    standalone: true,
})
export class SliderBehaviorDirective {
    constructor(private el: ElementRef) {}

    @HostListener('click')
    changSlide() {
        const currentEl = this.el.nativeElement.textContent;
        currentEl === ' Next' ? this.nextSlide() : this.previousSlide();
    }

    public nextSlide() {
        const element =
            this.el.nativeElement.parentElement.parentElement.children[0];
        return element.getElementsByClassName('item');
    }

    public previousSlide() {
        const element =
            this.el.nativeElement.parentElement.parentElement.children[0];
        return element.getElementsByClassName('item');
    }
}
