import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
    MAT_SNACK_BAR_DATA,
    MatSnackBarModule,
} from '@angular/material/snack-bar';

import { ISnackbar } from '@shared/models/snackbar.interface';

@Component({
    selector: 'cv-snackbar',
    standalone: true,
    imports: [CommonModule, MatSnackBarModule],
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: ISnackbar) {}
}
