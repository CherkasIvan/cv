import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogService } from '@shared/services/dialog/dialog.service';

@Component({
    selector: 'cv-img-dialog',
    templateUrl: './img-dialog.component.html',
    styleUrls: ['./img-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class ImgDialogComponent {
    constructor(
        private readonly _dialogService: DialogService,
        @Inject(MAT_DIALOG_DATA) public data: string,
    ) {}

    public closeDialog() {
        this._dialogService.closeDialog();
    }
}
