import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DarkModeService } from '@core/services/dark-mode/dark-mode.service';
import { ILanguagesSelector } from '@core/store/model/language-selector.interface';

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
    public isDark$: Observable<boolean> = this._darkModeService.isDark$;
    public languages = this._translateManagerService.languageList;
    public language = 'ru';
    private userState = this._localStorageService.getUsersState();

    constructor(
        private readonly _translateManagerService: TranslateManagerService,
        private readonly _darkModeService: DarkModeService,
        private _localStorageService: localStorageService,
        private _store$: Store<ILanguagesSelector>
    ) {}

    public toggle(event: Event): void {
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
