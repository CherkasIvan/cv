import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

import { logoutModalAnimation } from '@core/animations/logout-modal.animation';
import { ModalPortalDirective } from '@core/directives/modal-portal/modal-portal.directive';

import { ModalHostComponent } from './modal-host.component';

@Component({
    selector: 'cv-modal-outlet',
    templateUrl: './modal-outlet.component.html',
    styleUrls: ['./modal-outlet.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    animations: [logoutModalAnimation],
    imports: [CommonModule, ModalPortalDirective, ModalHostComponent],
})
export class ModalOutletComponent {
    @Input() public modalTitle = '';
    @Input() public modalContent = '';
    @Output() public modalCloseEmitter: EventEmitter<void> =
        new EventEmitter<void>();
    public fadeState: string = 'in';

    public closeModal() {
        this.fadeState = 'out';
        setTimeout(() => {
            this.modalCloseEmitter.emit();
        }, 1000);
    }
}
