import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { CarouselModule } from '@coreui/angular';
import { IProfilePhoto } from '@shared/models/profile-photo.interface';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'cv-carousel',
  templateUrl: './carousel.component.html',
  standalone: true,
  imports: [CarouselModule, RouterModule, CommonModule],
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public pageSlides$!:Observable<IProfilePhoto[]>;

  public slides: IProfilePhoto[] = new Array(3).fill({
    id: '',
    slideNumber: -1,
    src: '',
    title: '',
    subtitle: ''
  });

  constructor(private firebaseService: FirebaseService) {}

  public ngOnInit(): void {
    this.pageSlides$ = this.firebaseService.getMyProfilePhotos()
    this.pageSlides$.pipe(
      tap((slideList: IProfilePhoto[]) => {
        console.log(slideList)
        slideList.forEach((slide: IProfilePhoto) => {
          this.slides[slide.slideNumber] = {
            id: slide.id,
            slideNumber: slide.slideNumber,
            src: slide.src,
            title: slide.title,
            subtitle: slide.subtitle
          };
        })
      })
    )
  }
}
