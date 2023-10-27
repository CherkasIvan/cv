import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TranslateManagerService } from '@shared/services/translate/translate-manager.service';

@Component({
  selector: 'cv-download-img',
  templateUrl: './download-img.component.html',
  styleUrls: ['./download-img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DownloadImgComponent {
  public isEuropean = false;
  public currentLanguage$ = this._translateManagerService.currentLanguage$;
  public changeCvVersions() {
    this.isEuropean = !this.isEuropean;
  }

  constructor(
    private readonly _translateManagerService: TranslateManagerService
  ) {}
}
