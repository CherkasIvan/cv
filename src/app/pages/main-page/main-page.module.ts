import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MatTableModule } from '@angular/material/table';
import { MainPageRoutingModule } from './main-page-routing.module';



@NgModule({
  declarations: [
    MainPageComponent
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
