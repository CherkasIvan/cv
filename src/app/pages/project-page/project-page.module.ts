import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from './project-page.component';
import { ProjectsPageRoutingModule } from './project-page-routing.module';

@NgModule({
  declarations: [ProjectPageComponent],
  imports: [CommonModule, ProjectsPageRoutingModule],
})
export class ProjectPageModule {}
