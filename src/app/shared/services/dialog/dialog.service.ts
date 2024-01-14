import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ImgDialogComponent } from '@pages/education/components/img-dialog/img-dialog.component';

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    constructor(public dialog: MatDialog) {}

    openDialog(img: string): void {
        const dialogRef = this.dialog.open(ImgDialogComponent, {
            width: '600px',
            data: img,
        });
        dialogRef.afterClosed().subscribe((result) => {
            return result;
        });
    }

    closeDialog(): void {
        this.dialog.closeAll();
    }
}
