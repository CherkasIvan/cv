import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from './work-experience.component';
import { WorkExperienceRoutingModule } from './work-experience-routing.module';

@NgModule({
  declarations: [WorkExperienceComponent],
  imports: [CommonModule, WorkExperienceRoutingModule],
})
export class WorkExperienceModule {}
