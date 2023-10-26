import { Component, Input } from '@angular/core';
import { DialogService } from '@shared/services/dialog/dialog.service';

@Component({
  selector: 'cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.scss']
})
export class CvItemComponent {
  @Input() public downloadPath = '';
  @Input() public imgPath = '';
  @Input() public currentText = '';

  constructor(private dialogService: DialogService) {}

  openDialog(imgPath: string) {
    this.dialogService.openDialog(imgPath);
  }
}
