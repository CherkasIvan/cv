import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '@shared/services/firebase/firebase.service';

@Component({
  selector: 'cv-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  public frontendTech: any[] = [];
  public backendTech: any[] = [];
  public socialTech: any[] = [];
  public otherTech: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.getBackTech();
    this.getSocialTech();
    this.getFrontendTech();
    this.getOtherTech();
  }

  getFrontendTech() {
    this.firebaseService
      .getFrontendTech()
      .subscribe((fTech) => (this.frontendTech = fTech));
  }

  getBackTech() {
    this.firebaseService
      .getBackendTech()
      .subscribe((bTech) => (this.backendTech = bTech));
  }

  getSocialTech() {
    this.firebaseService
      .getSocialTech()
      .subscribe((social) => (this.socialTech = social));
  }

  getOtherTech() {
    this.firebaseService
      .getOtherTech()
      .subscribe((other) => (this.otherTech = other));
  }
}
