import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { ICvFormat } from '@shared/models/cv-format.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

import { DownloadImgComponent } from './components/download-img/download-img.component';

@Component({
    selector: 'cv-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [DownloadImgComponent, TranslateModule],
})
export class CvComponent {
    public cvList: Observable<ICvFormat[]> = this._firebaseService.getCvFormat();

    constructor(private readonly _firebaseService: FirebaseService) {}
}
