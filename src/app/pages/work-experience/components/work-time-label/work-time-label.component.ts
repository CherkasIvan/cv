import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'cv-work-time-label',
    templateUrl: './work-time-label.component.html',
    styleUrls: ['./work-time-label.component.scss'],
    standalone: true,
    imports: [NgIf, TranslateModule],
})
export class WorkTimeLabelComponent implements OnInit {
    @Input() public dateNumber: number = 0;
    constructor() {}

    ngOnInit() {}
}
