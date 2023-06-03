import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { SharedModule } from '@shared/shared.module';

import { AboutMeComponent } from './about-me.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { AboutPhotosComponent } from './components/about-photos/about-photos.component';

@NgModule({
  declarations: [AboutMeComponent, AboutContentComponent, AboutPhotosComponent],
  imports: [CommonModule, AboutMeRoutingModule, SharedModule],
})
export class AboutMeModule {}
