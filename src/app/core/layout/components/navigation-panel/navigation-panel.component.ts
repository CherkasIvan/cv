import { Component } from '@angular/core';
import { INavigation } from '@app/shared/models/navigation.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cv-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent {
  public navigation$: Observable<INavigation[]> =
    this.firebaseService.getNavigation();

  constructor(private firebaseService: FirebaseService) {}
}
