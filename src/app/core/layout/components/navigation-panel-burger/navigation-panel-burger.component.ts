import { Component } from '@angular/core';
import { navigationLinks } from 'utils/navigation';

@Component({
	selector: 'cv-navigation-panel-burger',
	templateUrl: './navigation-panel-burger.component.html',
	styleUrls: ['./navigation-panel-burger.component.scss']
})
export class NavigationPanelBurgerComponent {
	public navigation = navigationLinks;
}
