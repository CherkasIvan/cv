import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class TranslateManagerService {
	public currentLanguage$: BehaviorSubject<string> = new BehaviorSubject('ru')
	public languageList = [
		{ code: 'en', label: 'English' },
		{ code: 'ru', label: 'Russian' },
	];

	constructor(private translate: TranslateService) {
		translate.setDefaultLang('ru');
	}

	public changeLang(toggleValue: boolean) {
		toggleValue ? this.currentLanguage$.next('en') : this.currentLanguage$.next('ru')
		toggleValue ? this.translate.use('en') : this.translate.use('ru');
	}
}
