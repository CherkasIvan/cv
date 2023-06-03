import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { contacts } from 'src/assets/constants/contacts';

import { socialMediaLinks } from '../../../../../assets/constants/social-media-links';
import { DarkModeService } from 'src/app/core/services/dark-mode.service';

@Component({
  selector: 'cv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public socialLinks = socialMediaLinks;
  public myContacts = contacts;
  public currentTheme!: boolean;

  constructor(
    private _sanitizer: DomSanitizer,
    private darkModeService: DarkModeService
  ) {
    this.darkModeService.isDark$.subscribe(
      (theme) => (this.currentTheme = theme)
    );
  }

  ngOnInit(): void {}

  public getSantizeUrl(url: string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
}
