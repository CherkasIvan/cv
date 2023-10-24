import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';

import { AboutMeComponent } from './about-me.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { AboutPhotosComponent } from './components/about-photos/about-photos.component';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselComponent } from '../../standalone-components/carousel/carousel.component';

@NgModule({
  declarations: [AboutMeComponent, AboutContentComponent, AboutPhotosComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    TranslateModule,
    CarouselComponent,
    TranslateModule
  ]
})
export class AboutMeModule {}
