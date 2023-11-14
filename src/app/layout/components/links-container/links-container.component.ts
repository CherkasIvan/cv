import { CdkScrollable } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import { ISocialMedia } from '@shared/models/social-media.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'cv-links-container',
    standalone: true,
    imports: [CommonModule, MatTooltipModule, CdkScrollable],
    templateUrl: './links-container.component.html',
    styleUrls: ['./links-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinksContainerComponent {
    @Input() public modeTheme!: boolean;
    @Input() public pwaView = false;
    public socialMediaLinks$: Observable<ISocialMedia[]> = this._firebaseService.getSocialMediaLinks();

    constructor(
        private readonly _firebaseService: FirebaseService,
        private readonly _sanitizer: DomSanitizer,
    ) {}

    public getSantizeUrl(url: string) {
        return this._sanitizer.bypassSecurityTrustUrl(url);
    }
}
