import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '@standalone-components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string | null | undefined) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 1000,
      data: message
    });
  }
}
