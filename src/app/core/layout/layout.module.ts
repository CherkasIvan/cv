import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [LayoutComponent, NavigationPanelComponent, FooterComponent],
  exports: [LayoutComponent],
  imports: [LayoutRoutingModule, MatTableModule, CommonModule],
})
export class LayoutModule {}
