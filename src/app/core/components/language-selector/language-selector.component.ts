import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { localStorageService } from '@shared/services/localstorage/local-storage.service';
import { TranslateManagerService } from '@shared/services/translate/translate-manager.service';

@Component({
  selector: 'cv-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelectorComponent implements OnInit {
  public languages = this._translateManagerService.languageList;
  public language = 'ru';
  private userState = this._localStorageService.getUsersState();

  constructor(
    private readonly _translateManagerService: TranslateManagerService,
    private _localStorageService: localStorageService
  ) {}

  public toggle(event: Event) {
    this._translateManagerService.changeLang(
      (event?.target as HTMLInputElement).checked
    );
    this.language = this._translateManagerService.currentLanguage$.value;
    this._localStorageService.setLanguage(this.language);
  }

  ngOnInit(): void {
    if (this.userState) {
      this.language = this.userState.language;
      this._translateManagerService.currentLanguage$.next(this.language);
    }
  }
}
