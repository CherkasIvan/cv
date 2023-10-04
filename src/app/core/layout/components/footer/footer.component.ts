import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DarkModeService } from '@core/services/dark-mode.service';
import { pwaView } from 'utils/functions/pwaView';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

@Component({
  selector: 'cv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public socialLinks: any[] = [];
  public myContacts: any[] = [];
  public currentTheme!: boolean;
  public isPwaView: boolean = pwaView;

  constructor(
    private _sanitizer: DomSanitizer,
    private darkModeService: DarkModeService,
    private firebaseService: FirebaseService
  ) {
    this.darkModeService.isDark$.subscribe(
      (theme) => (this.currentTheme = theme)
    );
  }
  ngOnInit(): void {
    this.getContacts();
    this.getSocialMediaLinks();
  }

  public getSantizeUrl(url: string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }

  public getContacts() {
    this.firebaseService
      .getContacts()
      .subscribe((contacts) => (this.myContacts = contacts));
  }

  public getSocialMediaLinks() {
    this.firebaseService
      .getSocialMediaLinks()
      .subscribe((socialMediaLinks) => (this.socialLinks = socialMediaLinks));
  }
}
