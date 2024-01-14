import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackbarComponent } from '@core/components/snackbar/snackbar.component';

import { ISnackbar } from '@shared/models/snackbar.interface';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    constructor(private readonly _snackBar: MatSnackBar) {}

    openSnackBar(snackbarData: ISnackbar) {
        this._snackBar.openFromComponent(SnackbarComponent, {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 6000,
            data: snackbarData,
        });
    }
}
