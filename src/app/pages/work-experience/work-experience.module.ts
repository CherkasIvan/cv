import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkExperienceRoutingModule } from './work-experience-routing.module';

import { WorkExperienceComponent } from './work-experience.component';
import { WorkExperienceContentComponent } from './components/work-experience-content/work-experience-content.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WorkExperienceComponent, WorkExperienceContentComponent],
  imports: [CommonModule, WorkExperienceRoutingModule, SharedModule],
})
export class WorkExperienceModule {}
