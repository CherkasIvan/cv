import { TranslateModule } from '@ngx-translate/core';

import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TranslateManagerService } from '@shared/services/translate/translate-manager.service';

import { DownloadButtonComponent } from '../download-button/download-button.component';
import { CvItemComponent } from '../download-column/cv-item.component';

@Component({
    selector: 'cv-download-img-container',
    templateUrl: './download-img-container.component.html',
    styleUrls: ['./download-img-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        CvItemComponent,
        DownloadButtonComponent,
        AsyncPipe,
        TranslateModule,
    ],
})
export class DownloadImgContainerComponent {
    public isEuropean = false;
    public currentLanguage$ = this._translateManagerService.currentLanguage$;
    public changeCvVersions() {
        this.isEuropean = !this.isEuropean;
    }

    constructor(
        private readonly _translateManagerService: TranslateManagerService,
    ) {}
}
