import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { TranslateManagerService } from 'src/app/shared/services/translate/translate-manager.service';

@Component({
  selector: 'cv-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  public languages = this.translateManagerService.languageList;
  constructor(private translateManagerService: TranslateManagerService) {}

  public toggle(event: Event) {
    this.translateManagerService.changeLang(
      (event?.target as HTMLInputElement).checked
    );
  }
}
