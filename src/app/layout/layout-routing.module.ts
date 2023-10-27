import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'about-me',
        loadChildren: () =>
          import('../pages/about-me/about-me.module').then(
            (module) => module.AboutMeModule
          ),
        data: { animation: 'aboutMePage' }
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('../pages/projects/projects.module').then(
            (module) => module.ProjectsModule
          ),
        data: { animation: 'projectsPage' }
      },
      {
        path: 'education',
        loadChildren: () =>
          import('../pages/education/education.module').then(
            (module) => module.EducationModule
          ),
        data: { animation: 'educationPage' }
      },
      {
        path: 'technologies',
        loadChildren: () =>
          import('../pages/technologies/technologies.module').then(
            (module) => module.TechnologiesModule
          ),
        data: { animation: 'technologiesPage' }
      },
      {
        path: 'work-experience',
        loadChildren: () =>
          import('../pages/work-experience/work-experience.module').then(
            (module) => module.WorkExperienceModule
          ),
        data: { animation: 'workExperiencePage' }
      },
      {
        path: 'cv',
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
