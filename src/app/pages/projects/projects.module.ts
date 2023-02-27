import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';

import { ProjectsComponent } from './projects.component';
import { ProjectsContentComponent } from './components/projects-content/projects-content.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectsContentComponent],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
