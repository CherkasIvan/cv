import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '@shared/services/firebase/firebase.service';

@Component({
	selector: 'cv-initial-content',
	templateUrl: './initial-content.component.html',
	styleUrls: ['./initial-content.component.scss']
})
export class InitialContentComponent implements OnInit {
	public technologiesList: any[] = [];

	constructor(private firebaseService: FirebaseService) {}
	ngOnInit(): void {
		this.getTechnologiesList();
	}

	getTechnologiesList() {
		this.firebaseService
			.getProjectTech()
			.subscribe(
				(projectTechList) => (this.technologiesList = projectTechList)
			);
	}
}
