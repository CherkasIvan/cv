import { Component } from '@angular/core';

import { navigationLinks } from '../../../../../assets/constants/navigation';

@Component({
  selector: 'cv-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss'],
})
export class NavigationPanelComponent {
  public navigation = navigationLinks;
  constructor() {
    console.log(this.navigation);
  }
}
