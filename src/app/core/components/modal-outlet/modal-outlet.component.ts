import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Output,
    ViewChild,
} from '@angular/core';

import { ModalPortalDirective } from '@core/directives/modal-portal/modal-portal.directive';

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
        new EventEmitter<boolean>();

    @ViewChild('overlay') overlay!: ElementRef<HTMLDivElement>;

    // constructor(private readonly _authService: AuthService) {}

    public closeModal(event: MouseEvent) {
        if (this.overlay.nativeElement === event.target) {
            this.modalClosed.emit();
        }
    }

    // public confirmLogout() {
    //     this._authService.signOut();
    //     this.modalClosed.emit();
    // }
}
