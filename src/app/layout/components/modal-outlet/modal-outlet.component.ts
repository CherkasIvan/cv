import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Output,
    ViewChild,
} from '@angular/core';

import { Store } from '@ngrx/store';

import { ModalPortalDirective } from '@core/directives/modal-portal/modal-portal.directive';

import { ILogoutButton } from '@app/layout/store/model/logout-button.interface';

import { ModalHostComponent } from './modal-host.component';

@Component({
    selector: 'cv-modal-outlet',
    templateUrl: './modal-outlet.component.html',
    styleUrls: ['./modal-outlet.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, ModalPortalDirective, ModalHostComponent],
})
export class ModalOutletComponent {
    @Output() private modalClosed: EventEmitter<boolean> =
        new EventEmitter<boolean>(true);

    @ViewChild('overlay') overlay!: ElementRef<HTMLDivElement>;

    constructor(private readonly _store$: Store<ILogoutButton>) {}

    public closeModal(event: MouseEvent) {
        if (this.overlay.nativeElement === event.target) {
            this.modalClosed.emit();
        }
    }
}
