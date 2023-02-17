import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkExperienceRoutingModule } from './work-experience-routing.module';

import { WorkExperienceComponent } from './work-experience.component';

@NgModule({
  declarations: [WorkExperienceComponent],
  imports: [CommonModule, WorkExperienceRoutingModule],
})
export class WorkExperienceModule {}
