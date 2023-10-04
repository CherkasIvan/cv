import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

@Component({
  selector: 'cv-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  public cvList: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.getCvList();
  }

  getCvList() {
    this.firebaseService
      .getCvFormat()
      .subscribe((cvList) => (this.cvList = cvList));
  }
}
