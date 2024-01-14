import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ITechnologies } from '@shared/models/technologies.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

import { SkillsContentComponent } from '../../core/components/hard-skills-content/skills-content.component';

@Component({
    selector: 'cv-technologies',
    templateUrl: './technologies.component.html',
    styleUrls: ['./technologies.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [SkillsContentComponent, AsyncPipe, TranslateModule],
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
