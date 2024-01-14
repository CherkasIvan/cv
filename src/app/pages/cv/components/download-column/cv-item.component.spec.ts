import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvItemComponent } from './cv-item.component';

describe('CvItemComponent', () => {
    let component: CvItemComponent;
    let fixture: ComponentFixture<CvItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CvItemComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CvItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
