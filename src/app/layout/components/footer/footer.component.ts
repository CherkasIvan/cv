import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DarkModeService } from '@core/services/dark-mode/dark-mode.service';

import { LinksContainerComponent } from '@layout/components/links-container/links-container.component';

import { IContacts } from '@shared/models/contacts.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

import { pwaView } from '@utils/functions/pwaView';

@Component({
    selector: 'cv-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [LinksContainerComponent, CommonModule, TranslateModule],
})
export class FooterComponent {
    public myContacts$: Observable<IContacts[]> =
        this._firebaseService.getContacts();
    public currentTheme$ = this._darkModeService.isDark$;
    public isPwaView: boolean = pwaView;

    constructor(
        private readonly _sanitizer: DomSanitizer,
        private readonly _darkModeService: DarkModeService,
        private readonly _firebaseService: FirebaseService,
    ) {}

    public getSantizeUrl(url: string) {
        return this._sanitizer.bypassSecurityTrustUrl(url);
    }
}
