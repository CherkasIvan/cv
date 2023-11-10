import { NgClass, NgFor } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { PopUpCloseDirective } from '@core/directives/pop-up-close/pop-up-close.directive';

import { INavigation } from '@shared/models/navigation.interface';

import { setLogoutDialogSuccess } from '@app/layout/store/logout-button-store/logout-button.actions';

import { PopUpCloseDirective as PopUpCloseDirective_1 } from '../../../core/directives/pop-up-close/pop-up-close.directive';
import { DarkModeSelectorComponent } from '../dark-mode-selector/dark-mode-selector.component';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
    selector: 'cv-navigation-panel-burger',
    templateUrl: './navigation-panel-burger.component.html',
    styleUrls: ['./navigation-panel-burger.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        PopUpCloseDirective_1,
        NgClass,
        NgFor,
        RouterLink,
        RouterLinkActive,
        TranslateModule,
        LanguageSelectorComponent,
        DarkModeSelectorComponent,
    ],
})
export class NavigationPanelBurgerComponent {
    @Input() public burgerNavigators: INavigation[] = [];
    @ViewChild('popup', { read: ElementRef })
    popup!: ElementRef<PopUpCloseDirective>;

    public isNavigate: boolean = false;

    constructor(private readonly _store$: Store) {}

    public openLogoutDialog() {
        this._store$.dispatch(setLogoutDialogSuccess(true));
    }

    public navigationCheck(event: MouseEvent) {
        event.stopPropagation();
        this.isNavigate = !this.isNavigate;
    }

    public hidePopup(event: any) {
        if (event.target !== this.popup.nativeElement) {
            this.isNavigate = false;
        }
    }
}
