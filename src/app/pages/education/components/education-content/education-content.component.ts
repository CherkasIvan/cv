import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { IEducation } from '@shared/models/education.interface';
import { DialogService } from '@shared/services/dialog/dialog.service';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

import { CarouselComponent } from '../../../../core/components/carousel/carousel.component';

@Component({
    selector: 'cv-education-content',
    templateUrl: './education-content.component.html',
    styleUrls: ['./education-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgFor, NgIf, CarouselComponent, AsyncPipe, TranslateModule]
})
export class EducationContentComponent {
    public educationList$: Observable<IEducation[]> =
        this._firebaseService.getEducation();

    constructor(
        private readonly _dialogService: DialogService,
        private readonly _firebaseService: FirebaseService
    ) {}

    public openDialog(imgPath: string) {
        this._dialogService.openDialog(imgPath);
    }
}
