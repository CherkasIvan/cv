import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ICvFormat } from '@shared/models/cv-format.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

@Component({
  selector: 'cv-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  public cvList: Observable<ICvFormat[]> = this.firebaseService.getCvFormat();

  constructor(private firebaseService: FirebaseService) {}
}
