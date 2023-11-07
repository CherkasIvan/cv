import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'cv-modal-outlet',
    templateUrl: './modal-outlet.component.html',
    styleUrls: ['./modal-outlet.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule],
})
export class ModalOutletComponent {
    @Output() private isClosed = new EventEmitter<boolean>();

    @ViewChild('overlay') overlay!: ElementRef<HTMLDivElement>;

    closeModal(event: MouseEvent) {
        if (this.overlay.nativeElement === event.target) {
            this.isClosed.emit();
        }
    }
}
