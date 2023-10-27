import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { INavigation } from '@shared/models/navigation.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

@Component({
  selector: 'cv-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationPanelComponent {
  public navigation$: Observable<INavigation[]> =
    this._firebaseService.getNavigation();

  constructor(private readonly _firebaseService: FirebaseService) {}
}
