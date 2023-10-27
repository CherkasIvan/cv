import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { SkillsContentComponent } from '@core/components/hard-skills-content/skills-content.component';

import { TechnologiesRoutingModule } from './technologies-routing.module';
import { TechnologiesComponent } from './technologies.component';

@NgModule({
  declarations: [TechnologiesComponent],
  imports: [
    CommonModule,
    TechnologiesRoutingModule,
    SkillsContentComponent,
    TranslateModule
  ]
})
export class TechnologiesModule {}
