import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';
import { CvRoutingModule } from './cv-routing.module';
import { DownloadImgComponent } from './components/download-img/download-img.component';
import { SharedModule } from '@shared/shared.module';
import { CvItemComponent } from './components/download-column/cv-item.component';

@NgModule({
  declarations: [CvComponent, DownloadImgComponent, CvItemComponent],
  exports: [DownloadImgComponent],
  imports: [CvRoutingModule, CommonModule, SharedModule]
})
export class CvModule {}
