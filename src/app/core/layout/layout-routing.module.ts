import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { animation: 'Layout' },
    children: [
      {
        path: 'about-me',
        loadChildren: () =>
          import('../../pages/about-me/about-me.module').then(
            (module) => module.AboutMeModule
          ),

        data: { animation: 'Home' }
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('../../pages/projects/projects.module').then(
            (module) => module.ProjectsModule
          ),

        data: { animation: 'Home' }
      },
      {
        path: 'education',
        loadChildren: () =>
          import('../../pages/education/education.module').then(
            (module) => module.EducationModule
          ),

        data: { animation: 'Home' }
      },
      {
        path: 'technologies',
        loadChildren: () =>
          import('../../pages/technologies/technologies.module').then(
            (module) => module.TechnologiesModule
          )
      },
      {
        path: 'work-experience',
        loadChildren: () =>
          import('../../pages/work-experience/work-experience.module').then(
            (module) => module.WorkExperienceModule
          ),

        data: { animation: 'Home' }
      },
      {
        path: 'cv',
        loadChildren: () =>
          import('../../pages/cv/cv.module').then((module) => module.CvModule),

        data: { animation: 'Home' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
