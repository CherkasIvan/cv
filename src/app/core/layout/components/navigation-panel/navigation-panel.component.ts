import { Component } from '@angular/core';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

@Component({
  selector: 'cv-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent {
  public navigation: any[] = [];

  constructor(private firebaseService: FirebaseService) {}
  ngOnInit(): void {
    this.getNavigation();
  }

  public getNavigation() {
    this.firebaseService
      .getNavigation()
      .subscribe((links) => (this.navigation = links));
  }
}
