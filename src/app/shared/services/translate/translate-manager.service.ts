import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

import { localStorageService } from '../localstorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TranslateManagerService {
  public currentLanguage$: BehaviorSubject<string> = new BehaviorSubject('ru');
  public languageList = [
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Russian' }
  ];

  constructor(
    private readonly _translate: TranslateService,
    private readonly _localStorageService: localStorageService
  ) {
    _translate.setDefaultLang('ru');
  }

  public changeLang(toggleValue: boolean) {
    toggleValue
      ? this.currentLanguage$.next('en')
      : this.currentLanguage$.next('ru');
    toggleValue ? this._translate.use('en') : this._translate.use('ru');
    this._localStorageService.setLanguage(this.currentLanguage$.value);
  }
}
