import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { TranslateManagerService } from '@shared/services/translate/translate-manager.service';

import { ButtonComponent } from '../../../../core/components/button/button.component';
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
        ButtonComponent,
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
