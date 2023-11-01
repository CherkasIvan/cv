import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { INavigation } from '@shared/models/navigation.interface';

@Component({
    selector: 'cv-navigation-panel-burger',
    templateUrl: './navigation-panel-burger.component.html',
    styleUrls: ['./navigation-panel-burger.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationPanelBurgerComponent {
    @Input() public burgerNavigators: INavigation[] = [];
    public isNavigate: boolean = false;

    public navigationCheck() {
        this.isNavigate = !this.isNavigate;
    }

    public navigationClose(event: MouseEvent) {
        console.log(event);
        this.isNavigate = false;
    }
}
