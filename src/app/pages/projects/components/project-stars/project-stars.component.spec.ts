import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStarsComponent } from './project-stars.component';

describe('ProjectStarsComponent', () => {
    let component: ProjectStarsComponent;
    let fixture: ComponentFixture<ProjectStarsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ProjectStarsComponent],
        });
        fixture = TestBed.createComponent(ProjectStarsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
