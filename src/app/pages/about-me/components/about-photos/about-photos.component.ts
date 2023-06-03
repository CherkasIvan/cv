import { Component } from '@angular/core';
import { profilePhotos } from 'utils/my-profile-photos';

@Component({
	selector: 'cv-about-photos',
	templateUrl: './about-photos.component.html',
	styleUrls: ['./about-photos.component.scss'],
})
export class AboutPhotosComponent {
	public slides = profilePhotos;
}
