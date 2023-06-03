import { Component } from '@angular/core';
import { DialogService } from '@shared/services/dialog.service';
import { education } from '@assets/constants/education';

@Component({
  selector: 'cv-education-content',
  templateUrl: './education-content.component.html',
  styleUrls: ['./education-content.component.scss'],
})
export class EducationContentComponent {
  public educationList = education;

  constructor(private dialogService: DialogService) {}

  openDialog(imgPath: string) {
    this.dialogService.openDialog(imgPath);
  }
}
