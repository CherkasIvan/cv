import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologiesRoutingModule } from './technologies-routing.module';

import { TechnologiesComponent } from './technologies.component';
import { SkillsContentComponent } from '@app/standalone-components/hard-skills-content/skills-content.component';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [TechnologiesComponent],
	imports: [CommonModule, TechnologiesRoutingModule, SkillsContentComponent, TranslateModule]
})
export class TechnologiesModule {}
