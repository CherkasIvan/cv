import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ProjectStarsComponent } from './components/project-stars/project-stars.component';
import { ProjectsContentComponent } from './components/projects-content/projects-content.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
    declarations: [
        ProjectsComponent,
        ProjectsContentComponent,
        ProjectStarsComponent
    ],
    imports: [CommonModule, ProjectsRoutingModule, TranslateModule]
})
export class ProjectsModule {}
