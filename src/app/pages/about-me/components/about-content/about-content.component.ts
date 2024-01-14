import { TranslateModule } from '@ngx-translate/core';

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'cv-about-content',
    templateUrl: './about-content.component.html',
    styleUrls: ['./about-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [TranslateModule],
})
export class AboutContentComponent {}
