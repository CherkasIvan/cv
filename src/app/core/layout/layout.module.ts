import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationPanelBurgerComponent } from './components/navigation-panel-burger/navigation-panel-burger.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { DarkModeSelectorComponent } from './components/dark-mode-selector/dark-mode-selector.component';

import { SharedModule } from '@shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { InitialContentComponent } from './components/initial-content/initial-content.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
	declarations: [
		SpinnerComponent,
		InitialContentComponent,
		LayoutComponent,
		NavigationPanelComponent,
		FooterComponent,
		NavigationPanelBurgerComponent,
		LanguageSelectorComponent,
		DarkModeSelectorComponent,
  LogoutComponent
	],
	exports: [LayoutComponent],
	imports: [
		LayoutRoutingModule,
		MatTableModule,
		CommonModule,
		SharedModule,
		AuthModule
	]
})
export class LayoutModule {}
