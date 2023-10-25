import { Component } from '@angular/core';
import { ITechnologies } from '@app/shared/models/technologies.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cv-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {
  public frontendTech$: Observable<ITechnologies[]> =
    this.firebaseService.getFrontendTech();
  public backendTech$: Observable<ITechnologies[]> =
    this.firebaseService.getBackendTech();
  public socialTech$: Observable<ITechnologies[]> =
    this.firebaseService.getSocialTech();
  public otherTech$: Observable<ITechnologies[]> =
    this.firebaseService.getOtherTech();

  constructor(private firebaseService: FirebaseService) {}
}
