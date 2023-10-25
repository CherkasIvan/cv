import { Injectable } from '@angular/core';
import {
  Firestore,
  Query,
  collection,
  collectionData
} from '@angular/fire/firestore';
import { IContacts } from '@shared/models/contacts.interface';
import { ITechnologies } from '@app/shared/models/technologies.interface';
import { ICvFormat } from '@shared/models/cv-format.interface';
import { ISocialMedia } from '@app/shared/models/social-media.interface';
import { INavigation } from '@shared/models/navigation.interface';
import { IProfilePhoto } from '@shared/models/profile-photo.interface';
import { IWorkExperience } from '@shared/models/work-experience.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  frontendTechCollection$!: Observable<ITechnologies[]>;
  backendTechCollection$!: Observable<ITechnologies[]>;
  socialTechCollection$!: Observable<ITechnologies[]>;
  otherTechCollection$!: Observable<ITechnologies[]>;
  contactsCollection$!: Observable<IContacts[]>;
  navigationCollection$!: Observable<INavigation[]>;
  cvFormatCollection$!: Observable<ICvFormat[]>;
  profilePhotosCollection$!: Observable<IProfilePhoto[]>;
  socialMediaLinksCollection$!: Observable<ISocialMedia[]>;
  workExperienceCollection$!: Observable<IWorkExperience[]>;
  projectTechCollection$!: Observable<ITechnologies[]>;

  constructor(private firestore: Firestore) {}

  getFrontendTech(): Observable<ITechnologies[]> {
    this.frontendTechCollection$ = collectionData(
      collection(this.firestore, 'frontendTech'),
      { idField: 'id' }
    ) as Observable<ITechnologies[]>;
    return this.frontendTechCollection$;
  }

  getBackendTech(): Observable<ITechnologies[]> {
    this.backendTechCollection$ = collectionData(
      collection(this.firestore, 'backendTech'),
      { idField: 'id' }
    ) as Observable<ITechnologies[]>;
    return this.backendTechCollection$;
  }

  getSocialTech(): Observable<ITechnologies[]> {
    this.socialTechCollection$ = collectionData(
      collection(this.firestore, 'socialTech'),
      { idField: 'id' }
    ) as Observable<ITechnologies[]>;
    return this.socialTechCollection$;
  }

  getProjectTech(): Observable<ITechnologies[]> {
    this.projectTechCollection$ = collectionData(
      collection(this.firestore, 'projectTech'),
      { idField: 'id' }
    ) as Observable<ITechnologies[]>;
    return this.projectTechCollection$;
  }

  getOtherTech(): Observable<ITechnologies[]> {
    this.otherTechCollection$ = collectionData(
      collection(this.firestore, 'otherTech'),
      { idField: 'id' }
    ) as Observable<ITechnologies[]>;
    return this.otherTechCollection$;
  }

  getContacts(): Observable<IContacts[]> {
    this.contactsCollection$ = collectionData(
      collection(this.firestore, 'contacts'),
      { idField: 'id' }
    ) as Observable<IContacts[]>;
    return this.contactsCollection$;
  }

  getNavigation(): Observable<INavigation[]> {
    this.navigationCollection$ = collectionData(
      collection(this.firestore, 'navigation'),
      { idField: 'id' }
    ) as Observable<INavigation[]>;
    return this.navigationCollection$;
  }

  getCvFormat(): Observable<ICvFormat[]> {
    this.cvFormatCollection$ = collectionData(
      collection(this.firestore, 'cvFormat'),
      { idField: 'id' }
    ) as Observable<ICvFormat[]>;
    return this.cvFormatCollection$;
  }

  getMyProfilePhotos(): Observable<IProfilePhoto[]> {
    this.profilePhotosCollection$ = collectionData(
      collection(this.firestore, 'profilePhotos'),
      { idField: 'id' }
    ) as Observable<IProfilePhoto[]>;
    return this.profilePhotosCollection$;
  }

  getSocialMediaLinks(): Observable<ISocialMedia[]> {
    this.socialMediaLinksCollection$ = collectionData(
      collection(this.firestore, 'socialMediaLinks'),
      { idField: 'id' }
    ) as Observable<ISocialMedia[]>;
    return this.socialMediaLinksCollection$;
  }

  getWorkExperience(): Observable<IWorkExperience[]> {
    this.workExperienceCollection$ = collectionData(
      collection(this.firestore, 'workExperience'),
      { idField: 'id' }
    ) as Observable<IWorkExperience[]>;
    return this.workExperienceCollection$;
  }
}
