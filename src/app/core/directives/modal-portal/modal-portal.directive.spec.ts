/* tslint:disable:no-unused-variable */
import { TemplateRef } from '@angular/core';
import { ModalPortalDirective } from './modal-portal.directive';

describe('Directive: ModalPortal', () => {
    it('should create an instance', () => {
        const directive = new ModalPortalDirective((tpl:TemplateRef<unknown>),(vcr:any),(document:any));
        expect(directive).toBeTruthy();
    });
});
