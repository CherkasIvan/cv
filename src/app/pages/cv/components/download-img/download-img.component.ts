import { Component, OnInit } from '@angular/core';
import { TranslateManagerService } from '@shared/services/translate/translate-manager.service';

@Component({
	selector: 'cv-download-img',
	templateUrl: './download-img.component.html',
	styleUrls: ['./download-img.component.scss']
})
export class DownloadImgComponent implements OnInit {
	public isEuropean = false;
	public language!: string;
	public changeCvVersions() {
		this.isEuropean = !this.isEuropean;
	}

	constructor(private translateManagerService: TranslateManagerService) {}

	ngOnInit(): void {
		this.translateManagerService.currentLanguage$.subscribe(
			(actualLanguage: string) => (this.language = actualLanguage)
		);
	}
}
