import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WorkExperienceContentComponent } from './components/work-experience-content/work-experience-content.component';
import { WorkExperienceRoutingModule } from './work-experience-routing.module';
import { WorkExperienceComponent } from './work-experience.component';

@NgModule({
    imports: [
        CommonModule,
        WorkExperienceRoutingModule,
        WorkExperienceComponent,
        WorkExperienceContentComponent
    ]
})
export class WorkExperienceModule {}
