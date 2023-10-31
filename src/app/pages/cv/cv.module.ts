import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from '@core/components/button/button.component';

import { CvItemComponent } from './components/download-column/cv-item.component';
import { DownloadImgComponent } from './components/download-img/download-img.component';
import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './cv.component';

@NgModule({
    declarations: [CvComponent, DownloadImgComponent, CvItemComponent],
    exports: [DownloadImgComponent],
    imports: [CvRoutingModule, CommonModule, ButtonComponent, TranslateModule]
})
export class CvModule {}
