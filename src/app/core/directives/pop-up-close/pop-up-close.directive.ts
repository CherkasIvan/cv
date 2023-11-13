import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Output,
} from '@angular/core';

@Directive({
    selector: '[cvPopUpClose]',
    standalone: true,
})
export class PopUpCloseDirective {
    @Output() cvPopUpClose = new EventEmitter<MouseEvent>();

    @HostListener('document:click', ['$event'])
    onClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (!this.elementRef.nativeElement.contains(target)) {
            return this.cvPopUpClose.emit(event);
        }
    }

    constructor(private elementRef: ElementRef) {}
}
