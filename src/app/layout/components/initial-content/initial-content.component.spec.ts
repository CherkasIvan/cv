import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialContentComponent } from './initial-content.component';

describe('InitialContentComponent', () => {
    let component: InitialContentComponent;
    let fixture: ComponentFixture<InitialContentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [InitialContentComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(InitialContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
