import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { CarouselComponent } from '@core/components/carousel/carousel.component';

import { EducationContentComponent } from './components/education-content/education-content.component';
import { ImgDialogComponent } from './components/img-dialog/img-dialog.component';
import { EducationRoutingModule } from './education-routing.module';
import { EducationComponent } from './education.component';

@NgModule({
    imports: [
        CommonModule,
        EducationRoutingModule,
        TranslateModule,
        CarouselComponent,
        EducationComponent,
        EducationContentComponent,
        ImgDialogComponent
    ]
})
export class EducationModule {}
