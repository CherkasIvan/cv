import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { AboutPageRoutingModule } from './about-page-routing.module';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [CommonModule, AboutPageRoutingModule],
})
export class AboutPageModule {}
