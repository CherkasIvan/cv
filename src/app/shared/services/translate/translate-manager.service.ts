import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateManagerService {
  public languageList = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Russian' },
  ];

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ru');
  }

  public changeLang(toggleValue: boolean) {
    toggleValue ? this.translate.use('en') : this.translate.use('ru');
  }
}
