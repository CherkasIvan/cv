import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { MainPageRoutingModule } from './main-page-routing.module';

import { NavigationPanelComponent } from './components/navigation-panel/navigation-panel.component';
import { MainPageComponent } from './main-page.component';




@NgModule({
  declarations: [
    MainPageComponent,
    NavigationPanelComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    MainPageRoutingModule,
    MatTableModule,
    CommonModule
  ]
})
export class MainPageModule { }
