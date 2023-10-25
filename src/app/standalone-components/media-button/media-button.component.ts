import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ISocialMedia } from '@app/shared/models/social-media.interface';

@Component({
	selector: 'cv-media-button',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './media-button.component.html',
	styleUrls: ['./media-button.component.scss']
})
export class MediaButtonComponent {
	@Input() mediaLink!: ISocialMedia;
	@Input() modeTheme!: boolean;
	@Input() pwaView!: boolean;

	constructor(private _sanitizer: DomSanitizer) {}

	public getSantizeUrl(url: string) {
		return this._sanitizer.bypassSecurityTrustUrl(url);
	}
}
