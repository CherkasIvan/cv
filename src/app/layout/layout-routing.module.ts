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
                loadComponent: () =>
                    import('../pages/about-me/about-me.component').then(
                        (component) => component.AboutMeComponent
                    ),
                data: { animation: 'page-enter' }
            },
            {
                path: ERouterPath.PROJECTS,
                loadComponent: () =>
                    import('../pages/projects/projects.component').then(
                        (component) => component.ProjectsComponent
                    ),
                data: { animation: 'page-enter' }
            },
            {
                path: ERouterPath.EDUCATION,
                loadComponent: () =>
                    import('../pages/education/education.component').then(
                        (component) => component.EducationComponent
                    ),
                data: { animation: 'page-enter' }
            },
            {
                path: ERouterPath.TECHNOLOGIES,
                loadComponent: () =>
                    import('../pages/technologies/technologies.component').then(
                        (component) => component.TechnologiesComponent
                    ),
                data: { animation: 'page-enter' }
            },
            {
                path: ERouterPath.WORK_EXPERIENCE,
                loadComponent: () =>
                    import(
                        '../pages/work-experience/work-experience.component'
                    ).then((component) => component.WorkExperienceComponent),
                data: { animation: 'page-enter' }
            },
            {
                path: ERouterPath.CV,
                loadComponent: () =>
                    import('../pages/cv/cv.component').then(
                        (component) => component.CvComponent
                    ),
                data: { animation: 'page-enter' }
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
