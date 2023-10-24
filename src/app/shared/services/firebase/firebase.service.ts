import { Injectable } from '@angular/core';
import { Firestore, Query, collection, collectionData } from '@angular/fire/firestore';
import { IContacts } from '@shared/models/contacts.interface';
import { ITechnologies } from '@pages/projects/models/technologies.interface';
import { ICvFormat } from '@shared/models/cv-format.interface';
import { ILinks } from '@shared/models/links.interface';
import { INavigation } from '@shared/models/navigation.interface';
import { IProfilePhoto } from '@shared/models/profile-photo.interface';
import { IWorkExperience } from '@shared/models/work-experience.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  frontendTechCollection$!:  Observable<ITechnologies[]>;
  backendTechCollection$!:  Observable<ITechnologies[]>;
  socialTechCollection$!:  Observable<ITechnologies[]>;
  otherTechCollection$!: Observable<ITechnologies[]>;
  contactsCollection$!: Observable<IContacts[]>;
  navigationCollection$!: Observable<INavigation[]>;
  cvFormatCollection$!: Observable<ICvFormat[]>;
  profilePhotosCollection$!: Observable<IProfilePhoto[]>;
  socialMediaLinksCollection$!: Observable<ILinks[]>;
  workExperienceCollection$!: Observable<IWorkExperience[]>;
  projectTechCollection$!:  Observable<ITechnologies[]>;

  constructor(private firestore: Firestore) {}

  getFrontendTech() {
    this.frontendTechCollection$ = collectionData(
      collection(this.firestore, 'frontendTech'), { idField: 'id' }) as Observable<ITechnologies[]>;
      return this.frontendTechCollection$
  }

  getBackendTech() {
    this.backendTechCollection$ = collectionData(
      collection(this.firestore, 'backendTech'), { idField: 'id' }) as Observable<ITechnologies[]>;
      return this.backendTechCollection$
  }

  getSocialTech() {
    this.socialTechCollection$ = collectionData(
      collection(this.firestore, 'socialTech'), { idField: 'id' }) as Observable<ITechnologies[]>;
      return this.socialMediaLinksCollection$
  }

  getOtherTech() {
    this.otherTechCollection$ = collectionData(
      collection(this.firestore, 'otherTech'), { idField: 'id' }) as Observable<ITechnologies[]>;
      return this.otherTechCollection$
  }

  getContacts() {
    this.contactsCollection$ = collectionData(
      collection(this.firestore, 'contacts'), { idField: 'id' }) as Observable<IContacts[]>;
      return this.contactsCollection$
  }

  getNavigation() {
    this.navigationCollection$ = collectionData(
      collection(this.firestore, 'navigation'), { idField: 'id' }) as Observable<INavigation[]>;
      return this.navigationCollection$
  }

  getCvFormat() {
    this.cvFormatCollection$ = collectionData(
      collection(this.firestore, 'cvFormat'), { idField: 'id' }) as Observable<ICvFormat[]>;
      return this.cvFormatCollection$
  }

  getMyProfilePhotos() {
    this.profilePhotosCollection$ = collectionData(
      collection(this.firestore, 'profilePhotos'), { idField: 'id' }) as Observable<IProfilePhoto[]>;
      return this.profilePhotosCollection$
  }

  getSocialMediaLinks() {
    this.socialMediaLinksCollection$ = collectionData(
      collection(this.firestore, 'socialMediaLinks'), { idField: 'id' }) as Observable<ILinks[]>;
      return this.socialMediaLinksCollection$
  }

  getWorkExperience() {
    this.workExperienceCollection$ = collectionData(
      collection(this.firestore, 'workExperience'), { idField: 'id' }) as Observable<IWorkExperience[]>;
      return this.workExperienceCollection$
  }

  getProjectTech() {
    this.projectTechCollection$ = collectionData(
      collection(this.firestore, 'projectTech'), { idField: 'id' }) as Observable<ITechnologies[]>;
      return this.projectTechCollection$
  }
}
