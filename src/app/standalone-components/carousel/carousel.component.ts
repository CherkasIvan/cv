import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from '@coreui/angular';
import { IProfilePhoto } from '@core/models/profile-photo.interface';

@Component({
  selector: 'cv-carousel',
  templateUrl: './carousel.component.html',
  standalone: true,
  imports: [CarouselModule, RouterModule, CommonModule],
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
