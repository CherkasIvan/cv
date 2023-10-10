import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';

import { ProjectsComponent } from './projects.component';
import { ProjectsContentComponent } from './components/projects-content/projects-content.component';
import { ProjectStarsComponent } from './components/project-stars/project-stars.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
	declarations: [ProjectsComponent, ProjectsContentComponent, ProjectStarsComponent],
	imports: [CommonModule, ProjectsRoutingModule, TranslateModule]
})
export class ProjectsModule {}
