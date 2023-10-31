import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { DarkModeService } from '@core/services/dark-mode/dark-mode.service';

import { IContacts } from '@shared/models/contacts.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

import { pwaView } from '@utils/functions/pwaView';

@Component({
    selector: 'cv-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
    public myContacts$: Observable<IContacts[]> =
        this._firebaseService.getContacts();
    public currentTheme$ = this._darkModeService.isDark$;
    public isPwaView: boolean = pwaView;
    public isScrolable = false;

    constructor(
        private readonly _sanitizer: DomSanitizer,
        private readonly _darkModeService: DarkModeService,
        private readonly _firebaseService: FirebaseService
    ) {}

    public getSantizeUrl(url: string) {
        return this._sanitizer.bypassSecurityTrustUrl(url);
    }
}
