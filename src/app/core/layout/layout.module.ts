import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationPanelBurgerComponent } from './components/navigation-panel-burger/navigation-panel-burger.component';
import { InitialContentComponent } from './components/initial-content/initial-content.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { DarkModeSelectorComponent } from './components/dark-mode-selector/dark-mode-selector.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavigationPanelComponent,
    FooterComponent,
    NavigationPanelBurgerComponent,
    InitialContentComponent,
    LanguageSelectorComponent,
    DarkModeSelectorComponent,
  ],
  exports: [LayoutComponent],
  imports: [LayoutRoutingModule, MatTableModule, CommonModule, SharedModule],
})
export class LayoutModule {}
