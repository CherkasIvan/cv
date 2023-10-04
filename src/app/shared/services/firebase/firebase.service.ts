import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  frontendTechCollection!: any;

  backendTechCollection!: any;

  socialTechCollection!: any;

  otherTechCollection!: any;

  contactsCollection!: any;

  navigationCollection!: any;

  cvFormatCollection!: any;

  profilePhotosCollection!: any;

  socialMediaLinksCollection!: any;

  workExperienceCollection!: any;

  projectTechCollection!: any;

  constructor(private afs: Firestore) {}

  getFrontendTech() {
    this.frontendTechCollection = collection(this.afs, 'frontendTech');
    return collectionData(this.frontendTechCollection, { idField: 'id' });
  }

  getBackendTech() {
    this.backendTechCollection = collection(this.afs, 'backendTech');
    return collectionData(this.backendTechCollection, { idField: 'id' });
  }

  getSocialTech() {
    this.socialTechCollection = collection(this.afs, 'socialTech');
    return collectionData(this.socialTechCollection, { idField: 'id' });
  }

  getOtherTech() {
    this.otherTechCollection = collection(this.afs, 'otherTech');
    return collectionData(this.otherTechCollection, { idField: 'id' });
  }

  getContacts() {
    this.contactsCollection = collection(this.afs, 'contacts');
    return collectionData(this.contactsCollection, { idField: 'id' });
  }

  getNavigation() {
    this.navigationCollection = collection(this.afs, 'navigation');
    return collectionData(this.navigationCollection, { idField: 'id' });
  }

  getCvFormat() {
    this.cvFormatCollection = collection(this.afs, 'cvFormat');
    return collectionData(this.cvFormatCollection, { idField: 'id' });
  }

  getMyProfilePhotos() {
    this.profilePhotosCollection = collection(this.afs, 'profilePhotos');
    return collectionData(this.profilePhotosCollection, { idField: 'id' });
  }

  getSocialMediaLinks() {
    this.socialMediaLinksCollection = collection(this.afs, 'socialMediaLinks');
    return collectionData(this.socialMediaLinksCollection, { idField: 'id' });
  }

  getWorkExperience() {
    this.workExperienceCollection = collection(this.afs, 'workExperience');
    return collectionData(this.workExperienceCollection, { idField: 'id' });
  }

  getProjectTech() {
    this.projectTechCollection = collection(this.afs, 'projectTech');
    return collectionData(this.projectTechCollection, { idField: 'id' });
  }
}
