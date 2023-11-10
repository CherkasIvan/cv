import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

import { SkillsContentComponent } from '@core/components/hard-skills-content/skills-content.component';
import { ModalOutletComponent } from '@core/components/modal-outlet/modal-outlet.component';
import { PopUpCloseDirective } from '@core/directives/pop-up-close/pop-up-close.directive';

import { DarkModeSelectorComponent } from '@layout/components/dark-mode-selector/dark-mode-selector.component';
import { LanguageSelectorComponent } from '@layout/components/language-selector/language-selector.component';

import { LinksContainerComponent } from '@app/layout/components/links-container/links-container.component';

import { BackgroundsComponent } from './components/backgrounds/backgrounds.component';
import { FooterComponent } from './components/footer/footer.component';
import { InitialContentComponent } from './components/initial-content/initial-content.component';
import { NavigationPanelBurgerComponent } from './components/navigation-panel-burger/navigation-panel-burger.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
    exports: [LayoutComponent],
    imports: [
        LayoutRoutingModule,
        MatTableModule,
        CommonModule,
        SpinnerComponent,
        BackgroundsComponent,
        ModalOutletComponent,
        LayoutComponent,
    ],
})
export class LayoutModule {}
