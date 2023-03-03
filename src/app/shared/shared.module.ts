import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { SkillsContentComponent } from './components/hard-skills-content/skills-content.component';
import { TranslateModule } from '@ngx-translate/core';
import { DialogService } from './services/dialog.service';

@NgModule({
  declarations: [SkillsContentComponent],
  exports: [
    SkillsContentComponent,
    TranslateModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    DialogService,
  ],
})
export class SharedModule {}
