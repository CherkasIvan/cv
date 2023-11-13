import { Observable } from 'rxjs';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { darkModeSelector } from '@layout/store/dark-mode-store/dark-mode.selectors';
import { setLanguageSuccess } from '@layout/store/language-selector-store/language-selector.actions';
import { IDarkMode } from '@layout/store/model/dark-mode.interface';
import { ILanguagesSelector } from '@layout/store/model/language-selector.interface';

import { ILocalStorage } from '@shared/models/localstorage.interface';
import { localStorageService } from '@shared/services/localstorage/local-storage.service';
import { TranslateManagerService } from '@shared/services/translate/translate-manager.service';

@Component({
    selector: 'cv-language-selector',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './language-selector.component.html',
    styleUrls: ['./language-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectorComponent implements OnInit {
    public isDark$: Observable<boolean> = this._store$.pipe(
        select(darkModeSelector),
    );
    public languages = this._translateManagerService.languageList;
    public language$ = this._translateManagerService.currentLanguage$.value;
    private userState: ILocalStorage | null =
        this._localStorageService.getUsersState();

    constructor(
        private readonly _translateManagerService: TranslateManagerService,
        private _localStorageService: localStorageService,
        private _store$: Store<ILanguagesSelector & IDarkMode>,
    ) {}

    public toggle(event: Event): void {
        this._translateManagerService.changeLang(
            (event?.target as HTMLInputElement).checked,
        );
        this.language$ = this._translateManagerService.currentLanguage$.value;
        this._store$.dispatch(
            setLanguageSuccess(
                this.changeLang((<HTMLInputElement>event.target).checked),
            ),
        );
        // this._localStorageService.setLanguage(this.language);
    }

    public changeLang(toggleValue: boolean): string {
        return toggleValue ? 'en' : 'ru';
    }

    ngOnInit(): void {
        if (this.userState) {
            this.language$ = this.userState.language;
            this._translateManagerService.currentLanguage$.next(this.language$);
        }
    }
}
