import { Component } from '@angular/core';
import { ICvFormat } from '@app/shared/models/cv-format.interface';
import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cv-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  public cvList: Observable<ICvFormat[]> = this.firebaseService.getCvFormat();

  constructor(private firebaseService: FirebaseService) {}
}
