import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DarkModeService } from '@core/services/dark-mode/dark-mode.service';
import { pwaView } from 'utils/functions/pwaView';
import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { Observable } from 'rxjs';
import { IContacts } from '@shared/models/contacts.interface';

@Component({
  selector: 'cv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public myContacts$: Observable<IContacts[]> = this.firebaseService.getContacts();
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
  // ngOnInit(): void {
  //   this.getContacts();
  // }

  public getSantizeUrl(url: string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }

  // public getContacts() {
  //   this.firebaseService
  //     .getContacts()
  //     .subscribe((contacts) => (this.myContacts = contacts));
  // }
}
