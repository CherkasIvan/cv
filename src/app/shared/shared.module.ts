import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { SkillsContentComponent } from './components/hard-skills-content/skills-content.component';
import { TranslateModule } from '@ngx-translate/core';
import { DialogService } from './services/dialog/dialog.service';
import { SliderBehaviorDirective } from './directives/slider-behavior.directive';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
	declarations: [
		SkillsContentComponent,
		SliderBehaviorDirective,
		CarouselComponent,
		ButtonComponent,
	],
	exports: [
		SkillsContentComponent,
		CarouselComponent,
		TranslateModule,
		MatSlideToggleModule,
		MatFormFieldModule,
		MatDialogModule,
		ButtonComponent,
		SliderBehaviorDirective,
		CarouselModule,
		RouterModule,
	],
	imports: [
		CommonModule,
		TranslateModule,
		MatSlideToggleModule,
		MatFormFieldModule,
		MatDialogModule,
		CarouselModule,
		RouterModule,
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
