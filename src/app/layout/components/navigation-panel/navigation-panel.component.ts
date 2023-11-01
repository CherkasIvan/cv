import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { INavigation } from '@shared/models/navigation.interface';

@Component({
    selector: 'cv-navigation-panel',
    templateUrl: './navigation-panel.component.html',
    styleUrls: ['./navigation-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationPanelComponent {
    @Input() public navigators: INavigation[] = [];
}
