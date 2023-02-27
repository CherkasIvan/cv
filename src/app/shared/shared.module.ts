import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { SkillsContentComponent } from './components/hard-skills-content/skills-content.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SkillsContentComponent],
  exports: [SkillsContentComponent, TranslateModule, MatSlideToggleModule],
  imports: [CommonModule, TranslateModule, MatSlideToggleModule],
})
export class SharedModule {}
