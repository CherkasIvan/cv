import { ElementRef } from '@angular/core';
import { SliderBehaviorDirective } from './slider-behavior.directive';

describe('SliderBehaviorDirective', () => {
    it('should create an instance', () => {
        const directive = new SliderBehaviorDirective(() =>(_el: ElementRef<any>));
        expect(directive).toBeTruthy();
    });
});
