import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';
import { CvRoutingModule } from './cv-routing.module';
import { DownloadImgComponent } from './download-img/download-img.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CvComponent, DownloadImgComponent],
  exports: [DownloadImgComponent],
  imports: [CvRoutingModule, CommonModule, SharedModule],
})
export class CvModule {}
