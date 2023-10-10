import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationPanelBurgerComponent } from './components/navigation-panel-burger/navigation-panel-burger.component';
import { LanguageSelectorComponent } from '../../standalone-components/language-selector/language-selector.component';
import { DarkModeSelectorComponent } from '../../standalone-components/dark-mode-selector/dark-mode-selector.component';

import { AuthModule } from '../auth/auth.module';
import { InitialContentComponent } from './components/initial-content/initial-content.component';
import { SpinnerComponent } from '../../standalone-components/spinner/spinner.component';
import { LogoutComponent } from '../../standalone-components/logout/logout.component';
import { MediaButtonComponent } from '../../standalone-components/media-button/media-button.component';
import { ButtonComponent } from '../../standalone-components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { SkillsContentComponent } from '../../standalone-components/hard-skills-content/skills-content.component';

@NgModule({
	declarations: [
		InitialContentComponent,
		LayoutComponent,
		NavigationPanelComponent,
		FooterComponent,
		NavigationPanelBurgerComponent,
	],
	exports: [LayoutComponent],
	imports: [
		LayoutRoutingModule,
		MatTableModule,
		CommonModule,
		MediaButtonComponent,
		LanguageSelectorComponent,
		DarkModeSelectorComponent,
		SpinnerComponent,
		SkillsContentComponent,
		ButtonComponent,
		LogoutComponent,
		TranslateModule,
		AuthModule
	],
})
export class LayoutModule {}
