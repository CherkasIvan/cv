import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cv-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  public slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  @Input() public pageSlides: any;

  public ngOnInit(): void {
    this.pageSlides.forEach((el: any) => {
      this.slides[el.id] = {
        id: el.id,
        src: el.src,
        title: el.title,
        subtitle: el.subtitle,
      };
    });
  }
}
