import { Component, Input, OnInit } from '@angular/core';
import { IProfilePhoto } from '@shared/models/profile-photo.interface';

@Component({
  selector: 'cv-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public slides: IProfilePhoto[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: ''
  });

  @Input() public pageSlides!: IProfilePhoto[];

  public ngOnInit(): void {
    this.pageSlides.forEach((el: IProfilePhoto) => {
      this.slides[el.id] = {
        id: el.id,
        src: el.src,
        title: el.title,
        subtitle: el.subtitle
      };
    });
  }
}
