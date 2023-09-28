import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { contacts } from 'utils/contacts';

import { DarkModeService } from '@core/services/dark-mode.service';
import { socialMediaLinks } from 'utils/social-media-links';
import { pwaView } from 'utils/functions/pwaView';

@Component({
  selector: 'cv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public socialLinks = socialMediaLinks;
  public myContacts = contacts;
  public currentTheme!: boolean;
  public isPwaView: boolean = pwaView;

  constructor(
    private _sanitizer: DomSanitizer,
    private darkModeService: DarkModeService
  ) {
    this.darkModeService.isDark$.subscribe(
      (theme) => (this.currentTheme = theme)
    );
  }

  public getSantizeUrl(url: string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
}
