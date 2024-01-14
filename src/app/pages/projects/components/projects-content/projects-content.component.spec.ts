import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsContentComponent } from './projects-content.component';

describe('ProjectsContentComponent', () => {
    let component: ProjectsContentComponent;
    let fixture: ComponentFixture<ProjectsContentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProjectsContentComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectsContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
