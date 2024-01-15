import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundsComponent } from './backgrounds.component';

describe('BackgroundsComponent', () => {
    let component: BackgroundsComponent;
    let fixture: ComponentFixture<BackgroundsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BackgroundsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BackgroundsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
