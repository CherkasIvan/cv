import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LogoutDialogComponent } from '@core/components/logout-dialog/logout-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class LogoutDialogService {
    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        this.dialog.open(LogoutDialogComponent, {
            width: '600px',
            panelClass: 'logout-modal'
        });
    }

    closeDialog(): void {
        this.dialog.closeAll();
    }
}
