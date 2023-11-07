import { ElementRef } from '@angular/core';

import { SliderBehaviorDirective } from './slider-behavior.directive';

describe('SliderBehaviorDirective', () => {
    it('should create an instance', () => {
        const directive = new SliderBehaviorDirective(new ElementRef((nativeElement: any) => nativeElement));
        expect(directive).toBeTruthy();
    });
});
