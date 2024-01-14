import { TranslateModule } from '@ngx-translate/core';

import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
} from '@angular/core';

import { DialogService } from '@shared/services/dialog/dialog.service';

import { DownloadButtonComponent } from '../download-button/download-button.component';

@Component({
    selector: 'cv-item',
    templateUrl: './cv-item.component.html',
    styleUrls: ['./cv-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [DownloadButtonComponent, TranslateModule],
})
export class CvItemComponent implements OnChanges {
    public downloadPath = '';
    @Input() public cvItemNumber!: number;
    public imgPath = '';
    @Input() public translateLabel = '';
    @Input() public language = '';
    @Input() public isEuroVersion = false;

    private readonly downloadPathCis = 'assets/img/cv/cis';
    private readonly downloadPathEuro = 'assets/img/cv/euro';
    private readonly downloadPathTails: string[] = [
        '/i.cherkas_angular_cv.pdf',
        '/i.cherkas_angular_cv.jpg',
        '/i.cherkas_angular_cv_ru.pdf',
        '/i.cherkas_angular_cv_ru.jpg',
    ];
    private readonly imgPathCis =
        'assets/img/cv/cis/Ivan-Cherkas-Angular_Front-end_developer_cv_';
    private readonly imgPathEuro =
        'assets/img/cv/euro/Ivan-Cherkas-Angular_Front-end_developer_cv_';
    private readonly imgPathPages: string[] = [
        'page1.jpg',
        'page2.jpg',
        'page1_ru.jpg',
        'page2_ru.jpg',
    ];

    constructor(private readonly _dialogService: DialogService) {}

    public openDialog(imgPath: string) {
        this._dialogService.openDialog(imgPath);
    }

    private checkEuroVersion(): void {
        if (!this.isEuroVersion) {
            this.getDownloadPath(this.downloadPathCis);
            this.getImgPath(this.imgPathCis);
        } else {
            this.getDownloadPath(this.downloadPathEuro);
            this.getImgPath(this.imgPathEuro);
        }
    }

    private getImgPath(itemImgPath: string): void {
        if (this.language === 'ru') {
            const itemImgPathTail = this.imgPathPages.find(
                (path) =>
                    path.includes(this.language) &&
                    path.includes(this.cvItemNumber.toString()),
            );
            this.imgPath = itemImgPath + itemImgPathTail;
        } else {
            const itemImgPathTail = this.imgPathPages.find((elements) =>
                elements.includes(this.cvItemNumber.toString()),
            );
            this.imgPath = itemImgPath + itemImgPathTail;
        }
    }

    private getDownloadPath(itemDownloadPath: string): void {
        if (this.language === 'ru') {
            if (this.cvItemNumber.toString() === '1') {
                const itemDownloadPathTail = this.downloadPathTails.find(
                    (path) =>
                        path.includes(this.language) && path.includes('.pdf'),
                );
                this.downloadPath = itemDownloadPath + itemDownloadPathTail;
            } else {
                const itemDownloadPathTail = this.downloadPathTails.find(
                    (path) =>
                        path.includes(this.language) && path.includes('.jpg'),
                );
                this.downloadPath = itemDownloadPath + itemDownloadPathTail;
            }
        } else {
            if (this.cvItemNumber.toString() === '1') {
                const itemDownloadPathTail = this.downloadPathTails.find(
                    (path) => path.includes('.pdf'),
                );
                this.downloadPath = itemDownloadPath + itemDownloadPathTail;
            } else {
                const itemDownloadPathTail = this.downloadPathTails.find(
                    (path) => path.includes('.jpg'),
                );
                this.downloadPath = itemDownloadPath + itemDownloadPathTail;
            }
        }
    }

    ngOnChanges(): void {
        this.checkEuroVersion();
    }
}
