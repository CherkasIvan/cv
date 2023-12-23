import { Observable, tap } from 'rxjs';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { setLogoutDialogSuccess } from '@layout/store/logout-button-store/logout-button.actions';
import { logoutButtonSelector } from '@layout/store/logout-button-store/logout-button.selectors';
import { ILogoutButton } from '@layout/store/model/logout-button.interface';

import { ModalOutletComponent } from '../modal-outlet/modal-outlet.component';

@Component({
    selector: 'cv-logout-button',
    standalone: true,
    imports: [CommonModule, ModalOutletComponent],
    templateUrl: './logout-button.component.html',
    styleUrls: ['./logout-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutButtonComponent {
    @Input() public buttonName = '';
    public showLogoutModal$: Observable<boolean> = this._store$.pipe(
        select(logoutButtonSelector),
    );

    constructor(private readonly _store$: Store<ILogoutButton>) {}

    public openLogoutDialog(): void {
        this.showLogoutModal$.pipe(tap((el) => console.log(el)));
        this._store$.dispatch(setLogoutDialogSuccess(true));
    }
}
