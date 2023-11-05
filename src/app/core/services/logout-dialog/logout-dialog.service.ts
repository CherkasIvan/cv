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
            maxWidth: '300px',
            minWidth: '250px',
            panelClass: 'logout-modal'
        });
    }

    closeDialog(): void {
        this.dialog.closeAll();
    }
}
