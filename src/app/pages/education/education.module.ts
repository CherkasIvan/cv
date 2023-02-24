import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';

import { EducationComponent } from './education.component';
import { EducationContentComponent } from './components/education-content/education-content.component';

@NgModule({
  declarations: [EducationComponent, EducationContentComponent],
  imports: [CommonModule, EducationRoutingModule],
})
export class EducationModule {}
