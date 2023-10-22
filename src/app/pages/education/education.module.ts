import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';

import { EducationComponent } from './education.component';
import { EducationContentComponent } from './components/education-content/education-content.component';
import { ImgDialogComponent } from './components/img-dialog/img-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselComponent } from '@standalone-components/carousel/carousel.component';

@NgModule({
  declarations: [
    EducationComponent,
    EducationContentComponent,
    ImgDialogComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    TranslateModule,
    CarouselComponent
  ]
})
export class EducationModule {}
