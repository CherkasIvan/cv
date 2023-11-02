import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ITechnologies } from '@shared/models/technologies.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { fadeIn } from '@app/core/animations/route-animation';

@Component({
    selector: 'cv-technologies',
    templateUrl: './technologies.component.html',
    styleUrls: ['./technologies.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        fadeIn
        ]
})
export class TechnologiesComponent {
    public frontendTech$: Observable<ITechnologies[]> =
        this._firebaseService.getFrontendTech();
    public backendTech$: Observable<ITechnologies[]> =
        this._firebaseService.getBackendTech();
    public socialTech$: Observable<ITechnologies[]> =
        this._firebaseService.getSocialTech();
    public otherTech$: Observable<ITechnologies[]> =
        this._firebaseService.getOtherTech();

    constructor(private readonly _firebaseService: FirebaseService) {}
}
