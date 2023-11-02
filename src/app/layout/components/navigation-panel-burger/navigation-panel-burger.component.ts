import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    ViewChild
} from '@angular/core';

import { PopUpCloseDirective } from '@core/directives/pop-up-close/pop-up-close.directive';

import { INavigation } from '@shared/models/navigation.interface';

@Component({
    selector: 'cv-navigation-panel-burger',
    templateUrl: './navigation-panel-burger.component.html',
    styleUrls: ['./navigation-panel-burger.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationPanelBurgerComponent {
    @Input() public burgerNavigators: INavigation[] = [];
    @ViewChild('popup', { read: ElementRef })
    popup!: ElementRef<PopUpCloseDirective>;

    public isNavigate: boolean = false;

    public navigationCheck(event: MouseEvent) {
        event.stopPropagation();
        this.isNavigate = !this.isNavigate;
    }

    public hidePopup(event: any) {
        if (event.target !== this.popup.nativeElement) {
            this.isNavigate = false;
        }
    }
}
