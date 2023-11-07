import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPanelBurgerComponent } from './navigation-panel-burger.component';

describe('NavigationPanelBurgerComponent', () => {
    let component: NavigationPanelBurgerComponent;
    let fixture: ComponentFixture<NavigationPanelBurgerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavigationPanelBurgerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NavigationPanelBurgerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
