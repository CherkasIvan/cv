import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { TranslateManagerService } from '@shared/services/translate/translate-manager.service';

import { DownloadButtonComponent } from '../download-button/download-button.component';
import { CvItemComponent } from '../download-column/cv-item.component';

@Component({
    selector: 'cv-download-img',
    templateUrl: './download-img.component.html',
    styleUrls: ['./download-img.component.scss'],
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
export class DownloadImgComponent {
    public isEuropean = false;
    public currentLanguage$ = this._translateManagerService.currentLanguage$;
    public changeCvVersions() {
        this.isEuropean = !this.isEuropean;
    }

    constructor(
        private readonly _translateManagerService: TranslateManagerService,
    ) {}
}
