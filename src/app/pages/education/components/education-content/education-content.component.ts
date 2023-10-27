import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { IEducation } from '@shared/models/education.interface';
import { DialogService } from '@shared/services/dialog/dialog.service';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

@Component({
  selector: 'cv-education-content',
  templateUrl: './education-content.component.html',
  styleUrls: ['./education-content.component.scss']
})
export class EducationContentComponent {
  public educationList$: Observable<IEducation[]> =
    this.firebaseService.getEducation();

  constructor(
    private dialogService: DialogService,
    private firebaseService: FirebaseService
  ) {
    this.firebaseService.getEducation().subscribe((el) => console.log(el));
  }

  openDialog(imgPath: string) {
    this.dialogService.openDialog(imgPath);
  }
}
