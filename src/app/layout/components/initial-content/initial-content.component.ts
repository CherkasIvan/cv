import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { ITechnologies } from '@shared/models/tecnologies.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

import { SkillsContentComponent } from '../../../core/components/hard-skills-content/skills-content.component';

@Component({
    selector: 'cv-initial-content',
    templateUrl: './initial-content.component.html',
    styleUrls: ['./initial-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [SkillsContentComponent, AsyncPipe, TranslateModule],
})
export class InitialContentComponent {
    public technologiesList$: Observable<ITechnologies[]> = this._firebaseService.getProjectTech();

    constructor(private readonly _firebaseService: FirebaseService) {}
}
