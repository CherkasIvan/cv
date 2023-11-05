import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

import { AuthModule } from '@auth/auth.module';

import { ButtonComponent } from '@core/components/button/button.component';
import { DarkModeSelectorComponent } from '@core/components/dark-mode-selector/dark-mode-selector.component';
import { SkillsContentComponent } from '@core/components/hard-skills-content/skills-content.component';
import { LanguageSelectorComponent } from '@core/components/language-selector/language-selector.component';
import { LinksContainerComponent } from '@core/components/links-container/links-container.component';
import { SimpleButtonComponent } from '@core/components/simple-button/simple-button.component';
import { SpinnerComponent } from '@core/components/spinner/spinner.component';
import { PopUpCloseDirective } from '@core/directives/pop-up-close/pop-up-close.directive';

import { BackgroundsComponent } from './components/backgrounds/backgrounds.component';
import { FooterComponent } from './components/footer/footer.component';
import { InitialContentComponent } from './components/initial-content/initial-content.component';
import { NavigationPanelBurgerComponent } from './components/navigation-panel-burger/navigation-panel-burger.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

@NgModule({
    declarations: [
        InitialContentComponent,
        LayoutComponent,
        NavigationPanelComponent,
        NavigationPanelBurgerComponent,
        PopUpCloseDirective
    ],
    exports: [LayoutComponent, PopUpCloseDirective],
    imports: [
        LayoutRoutingModule,
        MatTableModule,
        CommonModule,
        LanguageSelectorComponent,
        DarkModeSelectorComponent,
        SpinnerComponent,
        BackgroundsComponent,
        FooterComponent,
        SkillsContentComponent,
        LinksContainerComponent,
        ButtonComponent,
        SimpleButtonComponent,
        TranslateModule,
        AuthModule
    ]
})
export class LayoutModule {}
