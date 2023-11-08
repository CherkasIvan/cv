import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { SimpleButtonComponent } from '@core/components/simple-button/simple-button.component';

import { INavigation } from '@shared/models/navigation.interface';

import { DarkModeSelectorComponent } from '../dark-mode-selector/dark-mode-selector.component';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { NavigationPanelBurgerComponent } from '../navigation-panel-burger/navigation-panel-burger.component';

@Component({
    selector: 'cv-navigation-panel',
    templateUrl: './navigation-panel.component.html',
    styleUrls: ['./navigation-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        RouterLink,
        NgFor,
        RouterLinkActive,
        NavigationPanelBurgerComponent,
        LanguageSelectorComponent,
        DarkModeSelectorComponent,
        SimpleButtonComponent,
        TranslateModule,
    ],
})
export class NavigationPanelComponent {
    @Input() public navigators: INavigation[] = [];
}
