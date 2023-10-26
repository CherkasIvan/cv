import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DarkModeService } from '@core/services/dark-mode/dark-mode.service';
import { pwaView } from 'utils/functions/pwaView';
import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { Observable } from 'rxjs';
import { IContacts } from '@shared/models/contacts.interface';
import { ISocialMedia } from '@shared/models/social-media.interface';

@Component({
  selector: 'cv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public socialMedia$: Observable<ISocialMedia[]> =
    this.firebaseService.getSocialMediaLinks();
  public myContacts$: Observable<IContacts[]> =
    this.firebaseService.getContacts();
  public currentTheme$ = this.darkModeService.isDark$;
  public isPwaView: boolean = pwaView;

  constructor(
    private _sanitizer: DomSanitizer,
    private darkModeService: DarkModeService,
    private firebaseService: FirebaseService
  ) {}

  public getSantizeUrl(url: string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
}
