import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { IProfilePhoto } from '@shared/models/profile-photo.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

import { CarouselComponent } from '../../../../core/components/carousel/carousel.component';

@Component({
    selector: 'cv-about-photos',
    templateUrl: './about-photos.component.html',
    styleUrls: ['./about-photos.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CarouselComponent]
})
export class AboutPhotosComponent {
    public slides$: Observable<IProfilePhoto[]> =
        this._firebaseService.getMyProfilePhotos();

    constructor(private readonly _firebaseService: FirebaseService) {}
}
