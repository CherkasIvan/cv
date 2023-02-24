import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsContentComponent } from './components/hard-skills-content/skills-content.component';

@NgModule({
  declarations: [SkillsContentComponent],
  exports: [SkillsContentComponent],
  imports: [CommonModule],
})
export class SharedModule {}
