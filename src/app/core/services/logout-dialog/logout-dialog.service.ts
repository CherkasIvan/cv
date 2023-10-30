import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LogoutDialogComponent } from '@core/components/logout-dialog/logout-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class LogoutDialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LogoutDialogComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      return result;
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
}
