import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[cvPopUpClose]',
})
export class PopUpCloseDirective {
    @Output()
    clickOutside: EventEmitter<boolean> = new EventEmitter<boolean>();

    @HostListener('document:click', ['$event'])
    onClick(event: MouseEvent) {
        if (!this.elemRef.nativeElement.contains(event.target)) {
            this.clickOutside.emit(!this.elemRef.nativeElement.contains(event.target));
            console.log(!this.elemRef.nativeElement.contains(event.target));
        } else {
            this.clickOutside.emit(!this.elemRef.nativeElement.contains(event.target));
            console.log(!this.elemRef.nativeElement.contains(event.target));
        }
    }

    constructor(private elemRef: ElementRef) {}
}
