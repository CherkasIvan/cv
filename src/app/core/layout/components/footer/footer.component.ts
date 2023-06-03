import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { contacts } from 'utils/contacts';

import { DarkModeService } from '@core/services/dark-mode.service';
import { socialMediaLinks } from '@utils/social-media-links';


@Component({
	selector: 'cv-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit 
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
	public socialLinks = socialMediaLinks;
	public myContacts = contacts;

	constructor(private _sanitizer: DomSanitizer) {}

	ngOnInit(): void {}

	public getSantizeUrl(url: string) {
		return this._sanitizer.bypassSecurityTrustUrl(url);
	}
}
