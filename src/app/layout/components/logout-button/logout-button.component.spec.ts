import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleButtonComponent } from './logout-button.component';

describe('SimpleButtonComponent', () => {
    let component: SimpleButtonComponent;
    let fixture: ComponentFixture<SimpleButtonComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SimpleButtonComponent],
        });
        fixture = TestBed.createComponent(SimpleButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
