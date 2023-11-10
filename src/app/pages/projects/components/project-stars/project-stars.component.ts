import { NgFor } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'cv-project-stars',
    templateUrl: './project-stars.component.html',
    styleUrls: ['./project-stars.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgFor],
})
export class ProjectStarsComponent implements OnInit {
    @Input() public projectStars = 0;
    public starsArray: number[] = [];

    ngOnInit(): void {
        this.starsArray = Array(this.projectStars).fill(1);
    }
}
