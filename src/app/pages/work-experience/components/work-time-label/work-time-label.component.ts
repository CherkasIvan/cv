import { TranslateModule } from '@ngx-translate/core';

import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'cv-work-time-label',
    templateUrl: './work-time-label.component.html',
    styleUrls: ['./work-time-label.component.scss'],
    standalone: true,
    imports: [NgIf, TranslateModule],
})
export class WorkTimeLabelComponent {
    @Input() public dateNumber: number = 0;
    @Input() public dateLabel: string = '';
}
