import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    component: AboutPageComponent,
  },
];

@NgModule({
  declarations: [AboutPageComponent],
  imports: [CommonModule],
})
export class AboutPageModule {}
