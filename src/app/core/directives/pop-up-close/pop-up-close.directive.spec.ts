import { ElementRef } from '@angular/core';

import { PopUpCloseDirective } from './pop-up-close.directive';

describe('PopUpCloseDirective', () => {
    it('should create an instance', () => {
        const directive = new PopUpCloseDirective(
            new ElementRef((nativeElement: ElementRef) => nativeElement),
        );
        expect(directive).toBeTruthy();
    });
});
