import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PopUpCloseDirective } from '@core/directives/pop-up-close/pop-up-close.directive';
import { INavigation } from '@shared/models/navigation.interface';

@Component({
    selector: 'cv-navigation-panel-burger',
    templateUrl: './navigation-panel-burger.component.html',
    styleUrls: ['./navigation-panel-burger.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PopUpCloseDirective],
})
export class NavigationPanelBurgerComponent {
    @Input() public burgerNavigators: INavigation[] = [];
    @ViewChild('clickOutside')
    private readonly popup!: ElementRef;
    public isNavigate: boolean = false;
    constructor(private popUpClose: PopUpCloseDirective) {}
    public navigationCheck() {
        this.isNavigate = !this.isNavigate;
        console.log(this.popUpClose.clickOutside);
    }

    public hidePopup(event$: MouseEvent) {
        console.log(event$);
        this.popup.nativeElement.classList.add('menu-toggle__close');
        console.log(this.popup);
    }
}
