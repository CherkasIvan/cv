import { Component, Input } from '@angular/core';

@Component({
	selector: 'cv-download-img',
	templateUrl: './download-img.component.html',
	styleUrls: ['./download-img.component.scss'],
})
export class DownloadImgComponent {
	public isEuropean: boolean = false
	public changeCvVersions() {
		this.isEuropean = !this.isEuropean
	}
}
