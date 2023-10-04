import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '@shared/services/firebase/firebase.service';
import { projectTechnologies } from 'utils/project-technologies';

@Component({
  selector: 'cv-initial-content',
  templateUrl: './initial-content.component.html',
  styleUrls: ['./initial-content.component.scss']
})
export class InitialContentComponent implements OnInit {
  public technologiesList = projectTechnologies;

  constructor(private firebaseService: FirebaseService) {}
  ngOnInit(): void {
    // this.getTechnologiesList();
  }

  // getTechnologiesList() {
  //   this.firebaseService
  //     .getProjectTech()
  //     .subscribe(
  //       (projectTechList) => (this.technologiesList = projectTechList)
  //     );
  // }
}
