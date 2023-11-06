import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ProjectStarsComponent } from './components/project-stars/project-stars.component';
import { ProjectsContentComponent } from './components/projects-content/projects-content.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        TranslateModule,
        ProjectsComponent,
        ProjectsContentComponent,
        ProjectStarsComponent
    ]
})
export class ProjectsModule {}
