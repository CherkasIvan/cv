import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { CarouselComponent } from '../../core/components/carousel/carousel.component';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { AboutPhotosComponent } from './components/about-photos/about-photos.component';

@NgModule({
    imports: [
        CommonModule,
        AboutMeRoutingModule,
        TranslateModule,
        CarouselComponent,
        TranslateModule,
        AboutMeComponent,
        AboutContentComponent,
        AboutPhotosComponent,
    ],
})
export class AboutMeModule {}
