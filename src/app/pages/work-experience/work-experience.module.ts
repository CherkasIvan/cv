import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WorkExperienceContentComponent } from './components/work-experience-content/work-experience-content.component';
import { WorkExperienceRoutingModule } from './work-experience-routing.module';
import { WorkExperienceComponent } from './work-experience.component';

@NgModule({
  declarations: [WorkExperienceComponent, WorkExperienceContentComponent],
  imports: [CommonModule, WorkExperienceRoutingModule]
})
export class WorkExperienceModule {}
