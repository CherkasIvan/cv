import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';
import { CvRoutingModule } from './cv-routing.module';
import { DownloadImgComponent } from './download-img/download-img.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CvComponent, DownloadImgComponent],
  exports: [DownloadImgComponent],
  imports: [CvRoutingModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class CvModule {}
