import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { EducationRoutingModule } from './education-routing.module';

@NgModule({
  declarations: [EducationComponent],
  imports: [CommonModule, EducationRoutingModule],
})
export class EducationModule {}
