/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkTimeLabelComponent } from './work-time-label.component';

describe('WorkTimeLabelComponent', () => {
    let component: WorkTimeLabelComponent;
    let fixture: ComponentFixture<WorkTimeLabelComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [WorkTimeLabelComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkTimeLabelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
