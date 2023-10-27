import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { SpinnerService } from '@core/services/spinner/spinner.service';

@Component({
  selector: 'cv-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() spinnerStyle!: string;

  constructor(public spinnerService: SpinnerService) {}
}
