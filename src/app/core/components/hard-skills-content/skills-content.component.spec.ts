import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsContentComponent } from './skills-content.component';

describe('SkillsContentComponent', () => {
    let component: SkillsContentComponent;
    let fixture: ComponentFixture<SkillsContentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SkillsContentComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SkillsContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
