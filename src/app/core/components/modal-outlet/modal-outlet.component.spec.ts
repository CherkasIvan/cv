/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ModalOutletComponent } from './modal-outlet.component';

describe('ModalOutletComponent', () => {
    let component: ModalOutletComponent;
    let fixture: ComponentFixture<ModalOutletComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ModalOutletComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalOutletComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
