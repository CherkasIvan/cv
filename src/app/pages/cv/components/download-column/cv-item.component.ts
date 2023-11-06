import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DialogService } from '@shared/services/dialog/dialog.service';

import { ButtonComponent } from '../../../../core/components/button/button.component';

@Component({
    selector: 'cv-item',
    templateUrl: './cv-item.component.html',
    styleUrls: ['./cv-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ButtonComponent]
})
export class CvItemComponent {
    @Input() public downloadPath = '';
    @Input() public imgPath = '';
    @Input() public currentText = '';

    constructor(private readonly _dialogService: DialogService) {}

    openDialog(imgPath: string) {
        this._dialogService.openDialog(imgPath);
    }
}
