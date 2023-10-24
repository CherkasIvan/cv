import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';
import { CvRoutingModule } from './cv-routing.module';
import { DownloadImgComponent } from './components/download-img/download-img.component';
import { CvItemComponent } from './components/download-column/cv-item.component';
import { ButtonComponent } from '@standalone-components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CvComponent, DownloadImgComponent, CvItemComponent],
  exports: [DownloadImgComponent],
  imports: [CvRoutingModule, CommonModule, ButtonComponent, TranslateModule]
})
export class CvModule {}
