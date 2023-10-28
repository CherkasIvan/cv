import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';

import { ERouterPath } from '@utils/enum/router-path.enum';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ERouterPath.ABOUT_ME,
        loadChildren: () =>
          import('../pages/about-me/about-me.module').then(
            (module) => module.AboutMeModule
          ),
        data: { animation: 'aboutMePage' }
      },
      {
        path: ERouterPath.PROJECTS,
        loadChildren: () =>
          import('../pages/projects/projects.module').then(
            (module) => module.ProjectsModule
          ),
        data: { animation: 'projectsPage' }
      },
      {
        path: ERouterPath.EDUCATION,
        loadChildren: () =>
          import('../pages/education/education.module').then(
            (module) => module.EducationModule
          ),
        data: { animation: 'educationPage' }
      },
      {
        path: ERouterPath.TECHNOLOGIES,
        loadChildren: () =>
          import('../pages/technologies/technologies.module').then(
            (module) => module.TechnologiesModule
          ),
        data: { animation: 'technologiesPage' }
      },
      {
        path: ERouterPath.WORK_EXPERIENCE,
        loadChildren: () =>
          import('../pages/work-experience/work-experience.module').then(
            (module) => module.WorkExperienceModule
          ),
        data: { animation: 'workExperiencePage' }
      },
      {
        path: ERouterPath.CV,
        loadChildren: () =>
          import('../pages/cv/cv.module').then((module) => module.CvModule),
        data: { animation: 'cvPage' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes)]
})
export class LayoutRoutingModule {}
