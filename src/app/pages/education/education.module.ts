import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';

import { EducationComponent } from './education.component';
import { EducationContentComponent } from './components/education-content/education-content.component';
import { ImgDialogComponent } from './components/img-dialog/img-dialog.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    EducationComponent,
    EducationContentComponent,
    ImgDialogComponent
  ],
  imports: [CommonModule, EducationRoutingModule, SharedModule]
})
export class EducationModule {}
