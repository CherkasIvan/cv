import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarModule
} from '@angular/material/snack-bar';

@Component({
  selector: 'cv-snackbar',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) {
    console.log(data);
  }
}
