import { Component } from '@angular/core';

import { navigationLinks } from 'utils/navigation';

@Component({
	selector: 'cv-navigation-panel',
	templateUrl: './navigation-panel.component.html',
	styleUrls: ['./navigation-panel.component.scss'],
})
export class NavigationPanelComponent {
	public navigation = navigationLinks;
}
