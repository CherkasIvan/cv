import { TranslateModule } from '@ngx-translate/core';

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

import { PopUpCloseDirective } from '@core/directives/pop-up-close/pop-up-close.directive';

import { setLogoutDialogSuccess } from '@layout/store/logout-button-store/logout-button.actions';

import { INavigation } from '@shared/models/navigation.interface';

import { DarkModeSelectorComponent } from '../dark-mode-selector/dark-mode-selector.component';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
    selector: 'cv-navigation-panel-burger',
    templateUrl: './navigation-panel-burger.component.html',
    styleUrls: ['./navigation-panel-burger.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        PopUpCloseDirective,
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
    public popup!: ElementRef<PopUpCloseDirective>;

    public isNavigate: boolean = false;

    constructor(private readonly _store$: Store) {}

    public openLogoutDialog() {
        this._store$.dispatch(setLogoutDialogSuccess(true));
    }

    public navigationCheck(event: MouseEvent) {
        event.stopPropagation();
        this.isNavigate = !this.isNavigate;
    }

    public hidePopup(event: Event) {
        if (event.target !== (this.popup.nativeElement as unknown)) {
            this.isNavigate = false;
        }
    }
}
