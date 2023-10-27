import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { ISocialMedia } from '@shared/models/social-media.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

@Component({
  selector: 'cv-links-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links-container.component.html',
  styleUrls: ['./links-container.component.scss']
})
export class LinksContainerComponent {
  @Input() public modeTheme!: boolean;
  @Input() public pwaView!: boolean;
  public socialMediaLinks$: Observable<ISocialMedia[]> =
    this.firebaseService.getSocialMediaLinks();

  constructor(
    private firebaseService: FirebaseService,
    private _sanitizer: DomSanitizer
  ) {}

  public getSantizeUrl(url: string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
}
