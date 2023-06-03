import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from '@shared/services/dialog.service';

@Component({
  selector: 'cv-img-dialog',
  templateUrl: './img-dialog.component.html',
  styleUrls: ['./img-dialog.component.scss'],
})
export class ImgDialogComponent {
  constructor(
    private dialogService: DialogService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public closeDialog() {
    this.dialogService.closeDialog();
  }
}
