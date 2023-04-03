import { Component } from '@angular/core';

@Component({
  selector: 'cv-about-photos',
  templateUrl: './about-photos.component.html',
  styleUrls: ['./about-photos.component.scss'],
})
export class AboutPhotosComponent {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: 'assets/img/profile/1.jpeg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    };
    this.slides[1] = {
      id: 1,
      src: 'assets/img/profile/2.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };
    this.slides[2] = {
      id: 2,
      src: 'assets/img/profile/3.jpg',
      title: 'Third slide',
      subtitle:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    };
    this.slides[3] = {
      id: 2,
      src: 'assets/img/profile/4.jpg',
      title: 'Third slide',
      subtitle:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    };
  }
}
