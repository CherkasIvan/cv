import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologiesRoutingModule } from './technologies-routing.module';

import { TechnologiesComponent } from './technologies.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TechnologiesComponent],
  imports: [CommonModule, TechnologiesRoutingModule, SharedModule],
})
export class TechnologiesModule {}
