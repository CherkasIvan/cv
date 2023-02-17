import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesComponent } from './technologies.component';
import { TechnologiesRoutingModule } from './technologies-routing.module';

@NgModule({
  declarations: [TechnologiesComponent],
  imports: [CommonModule, TechnologiesRoutingModule],
})
export class TechnologiesModule {}
