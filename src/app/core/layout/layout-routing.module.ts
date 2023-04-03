import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: '/about-me',
    // pathMatch: 'full',
    component: LayoutComponent,
    children: [
      {
        path: 'about-me',
        loadChildren: () =>
          import('../../pages/about-me/about-me.module').then(
            (module) => module.AboutMeModule
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('../../pages/projects/projects.module').then(
            (module) => module.ProjectsModule
          ),
      },
      {
        path: 'education',
        loadChildren: () =>
          import('../../pages/education/education.module').then(
            (module) => module.EducationModule
          ),
      },
      {
        path: 'technologies',
        loadChildren: () =>
          import('../../pages/technologies/technologies.module').then(
            (module) => module.TechnologiesModule
          ),
      },
      {
        path: 'work-experience',
        loadChildren: () =>
          import('../../pages/work-experience/work-experience.module').then(
            (module) => module.WorkExperienceModule
          ),
      },
      {
        path: 'cv',
        loadChildren: () =>
          import('../../pages/cv/cv.module').then((module) => module.CvModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
