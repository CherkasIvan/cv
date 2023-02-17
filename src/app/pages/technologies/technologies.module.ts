import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologiesRoutingModule } from './technologies-routing.module';

import { TechnologiesComponent } from './technologies.component';

@NgModule({
  declarations: [TechnologiesComponent],
  imports: [CommonModule, TechnologiesRoutingModule],
})
export class TechnologiesModule {}
