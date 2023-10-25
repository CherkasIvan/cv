import { Component } from '@angular/core';
import { IProfilePhoto } from '@app/shared/models/profile-photo.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cv-about-photos',
  templateUrl: './about-photos.component.html',
  styleUrls: ['./about-photos.component.scss']
})
export class AboutPhotosComponent {
  public slides$: Observable<IProfilePhoto[]> =
    this.firebaseService.getMyProfilePhotos();

  constructor(private firebaseService: FirebaseService) {}
}
