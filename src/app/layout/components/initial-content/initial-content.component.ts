import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ITechnologies } from '@shared/models/tecnologies.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

@Component({
  selector: 'cv-initial-content',
  templateUrl: './initial-content.component.html',
  styleUrls: ['./initial-content.component.scss']
})
export class InitialContentComponent {
  public technologiesList$: Observable<ITechnologies[]> =
    this.firebaseService.getProjectTech();

  constructor(private firebaseService: FirebaseService) {}
}
