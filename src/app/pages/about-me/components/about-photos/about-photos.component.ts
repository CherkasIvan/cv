import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { profilePhotos } from 'utils/my-profile-photos';

@Component({
	selector: 'cv-about-photos',
	templateUrl: './about-photos.component.html',
	styleUrls: ['./about-photos.component.scss']
})
export class AboutPhotosComponent implements OnInit {
	public slides = profilePhotos;

	constructor(private firebaseService: FirebaseService) {}

	ngOnInit(): void {
		this.getSlides();
	}

	getSlides() {
		this.firebaseService
			.getMyProfilePhotos()
			.subscribe((photos) => photos);
	}
}
