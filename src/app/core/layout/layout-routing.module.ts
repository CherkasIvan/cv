import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: 'about-me',
				loadChildren: () =>
					import('../../pages/about-me/about-me.module').then(
						(module) => module.AboutMeModule
					),

				data: { num: 1 }
			},
			{
				path: 'projects',
				loadChildren: () =>
					import('../../pages/projects/projects.module').then(
						(module) => module.ProjectsModule
					),

				data: { num: 1 }
			},
			{
				path: 'education',
				loadChildren: () =>
					import('../../pages/education/education.module').then(
						(module) => module.EducationModule
					),

				data: { num: 1 }
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

				data: { num: 1 }
			},
			{
				path: 'cv',
				loadChildren: () =>
					import('../../pages/cv/cv.module').then((module) => module.CvModule),

				data: { num: 1 }
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LayoutRoutingModule {}
