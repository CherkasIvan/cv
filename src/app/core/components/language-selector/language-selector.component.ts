import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TranslateManagerService } from '@shared/services/translate/translate-manager.service';

@Component({
  selector: 'cv-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelectorComponent {
  public languages = this._translateManagerService.languageList;
  constructor(
    private readonly _translateManagerService: TranslateManagerService
  ) {}

  public toggle(event: Event) {
    this._translateManagerService.changeLang(
      (event?.target as HTMLInputElement).checked
    );
  }
}
