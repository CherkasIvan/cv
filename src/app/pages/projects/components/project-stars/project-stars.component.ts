import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cv-project-stars',
  templateUrl: './project-stars.component.html',
  styleUrls: ['./project-stars.component.scss']
})
export class ProjectStarsComponent implements OnInit {
  @Input() projectStars = 0;
  starsArray: number[] = [];

  ngOnInit(): void {
    this.starsArray = Array(this.projectStars).fill(1);
  }
}
