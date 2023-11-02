import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fadeIn } from '@app/core/animations/route-animation';

@Component({
    selector: 'cv-about-page',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        fadeIn
        ]
})
export class AboutMeComponent {}
