import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialContentRoutingModule } from './initial-content-routing.module';
import { InitialContentComponent } from './initial-content.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [InitialContentComponent],
  imports: [InitialContentRoutingModule, SharedModule, CommonModule]
})
export class InitialContentModule {}
