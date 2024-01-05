import { Injectable } from '@angular/core';
import {
    AngularFireDatabase,
    AngularFireList,
} from '@angular/fire/compat/database';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { IFileUpload } from '@app/shared/models/file-upload.interface';
import { IContacts } from '@shared/models/contacts.interface';
import { ICvFormat } from '@shared/models/cv-format.interface';
import { IEducation } from '@shared/models/education.interface';
import { INavigation } from '@shared/models/navigation.interface';
import { IProfilePhoto } from '@shared/models/profile-photo.interface';
import { ISocialMedia } from '@shared/models/social-media.interface';
import { ITechnologies } from '@shared/models/technologies.interface';
import { IWorkExperience } from '@shared/models/work-experience.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FirebaseService {
    private basePath = 'gs://cv-cherkas.appspot.com';
    file!: File;
    url = '';

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
    educarionCollection$!: Observable<IEducation[]>;
    charts$: AngularFireList<IFileUpload> | undefined;

    constructor(
        private readonly _firestore: Firestore,
        private db: AngularFireDatabase,
    ) {}

    getFiles(numberItems: number): AngularFireList<IFileUpload> {
        return (this.charts$ = this.db.list(this.basePath, (ref) =>
            ref.limitToLast(numberItems),
        ));
    }

    getFrontendTech(): Observable<ITechnologies[]> {
        this.frontendTechCollection$ = collectionData(
            collection(this._firestore, 'frontendTech'),
            {
                idField: 'id',
            },
        ) as Observable<ITechnologies[]>;
        return this.frontendTechCollection$;
    }

    getBackendTech(): Observable<ITechnologies[]> {
        this.backendTechCollection$ = collectionData(
            collection(this._firestore, 'backendTech'),
            {
                idField: 'id',
            },
        ) as Observable<ITechnologies[]>;
        return this.backendTechCollection$;
    }

    getSocialTech(): Observable<ITechnologies[]> {
        this.socialTechCollection$ = collectionData(
            collection(this._firestore, 'socialTech'),
            {
                idField: 'id',
            },
        ) as Observable<ITechnologies[]>;
        return this.socialTechCollection$;
    }

    getProjectTech(): Observable<ITechnologies[]> {
        this.projectTechCollection$ = collectionData(
            collection(this._firestore, 'projectTech'),
            {
                idField: 'id',
            },
        ) as Observable<ITechnologies[]>;
        return this.projectTechCollection$;
    }

    getOtherTech(): Observable<ITechnologies[]> {
        this.otherTechCollection$ = collectionData(
            collection(this._firestore, 'otherTech'),
            {
                idField: 'id',
            },
        ) as Observable<ITechnologies[]>;
        return this.otherTechCollection$;
    }

    getContacts(): Observable<IContacts[]> {
        this.contactsCollection$ = collectionData(
            collection(this._firestore, 'contacts'),
            {
                idField: 'id',
            },
        ) as Observable<IContacts[]>;
        return this.contactsCollection$;
    }

    getNavigation(): Observable<INavigation[]> {
        this.navigationCollection$ = collectionData(
            collection(this._firestore, 'navigation'),
            {
                idField: 'id',
            },
        ) as Observable<INavigation[]>;
        return this.navigationCollection$;
    }

    getCvFormat(): Observable<ICvFormat[]> {
        this.cvFormatCollection$ = collectionData(
            collection(this._firestore, 'cvFormat'),
            {
                idField: 'id',
            },
        ) as Observable<ICvFormat[]>;
        return this.cvFormatCollection$;
    }

    getMyProfilePhotos(): Observable<IProfilePhoto[]> {
        this.profilePhotosCollection$ = collectionData(
            collection(this._firestore, 'profilePhotos'),
            {
                idField: 'id',
            },
        ) as Observable<IProfilePhoto[]>;
        return this.profilePhotosCollection$;
    }

    getSocialMediaLinks(): Observable<ISocialMedia[]> {
        this.socialMediaLinksCollection$ = collectionData(
            collection(this._firestore, 'socialMediaLinks'),
            {
                idField: 'id',
            },
        ) as Observable<ISocialMedia[]>;
        return this.socialMediaLinksCollection$;
    }

    getWorkExperience(): Observable<IWorkExperience[]> {
        this.workExperienceCollection$ = collectionData(
            collection(this._firestore, 'workExperience'),
            {
                idField: 'id',
            },
        ) as Observable<IWorkExperience[]>;
        return this.workExperienceCollection$;
    }

    getEducation(): Observable<IEducation[]> {
        this.educarionCollection$ = collectionData(
            collection(this._firestore, 'education'),
            {
                idField: 'id',
            },
        ) as Observable<IEducation[]>;
        return this.educarionCollection$;
    }
}
