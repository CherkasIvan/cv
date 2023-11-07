import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkModeSelectorComponent } from './dark-mode-selector.component';

describe('DarkModeSelectorComponent', () => {
    let component: DarkModeSelectorComponent;
    let fixture: ComponentFixture<DarkModeSelectorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DarkModeSelectorComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(DarkModeSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
