import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPhotosComponent } from './about-photos.component';

describe('AboutPhotosComponent', () => {
    let component: AboutPhotosComponent;
    let fixture: ComponentFixture<AboutPhotosComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AboutPhotosComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AboutPhotosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
