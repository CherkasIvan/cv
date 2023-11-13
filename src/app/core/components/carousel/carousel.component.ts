import { CarouselModule } from '@coreui/angular';
import { Observable, tap } from 'rxjs';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IProfilePhoto } from '@shared/models/profile-photo.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

@Component({
    selector: 'cv-carousel',
    templateUrl: './carousel.component.html',
    standalone: true,
    imports: [CarouselModule, RouterModule, CommonModule],
    styleUrls: ['./carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit {
    public pageSlides$!: Observable<IProfilePhoto[]>;

    public slides: IProfilePhoto[] = new Array(3).fill({
        id: '',
        slideNumber: -1,
        src: '',
        title: '',
        subtitle: '',
    });

    constructor(private readonly _firebaseService: FirebaseService) {}

    public ngOnInit(): void {
        this.pageSlides$ = this._firebaseService.getMyProfilePhotos();
        this.pageSlides$.pipe(
            tap((slideList: IProfilePhoto[]) => {
                slideList.forEach((slide: IProfilePhoto) => {
                    this.slides[Number(slide.slideNumber)] = {
                        id: slide.id,
                        slideNumber: slide.slideNumber,
                        src: slide.src,
                        title: slide.title,
                        subtitle: slide.subtitle,
                    };
                });
            }),
        );
    }
}
