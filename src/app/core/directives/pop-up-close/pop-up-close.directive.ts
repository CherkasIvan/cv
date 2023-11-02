import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Output
} from '@angular/core';

@Directive({
    selector: '[cvPopUpClose]'
})
export class PopUpCloseDirective {
    @Output() clickOutside = new EventEmitter<MouseEvent>();

    @HostListener('document:click', ['$event'])
    onClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (!this.elementRef.nativeElement.contains(target)) {
            this.clickOutside.emit(event);
        }
    }

    constructor(private elementRef: ElementRef) {}
}
