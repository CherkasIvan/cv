import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from 'src/app/pages/about-page/about-page.component';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../pages/about-page/about-page.module').then(
            (module) => module.AboutPageModule
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('../../pages/project-page/project-page.module').then(
            (module) => module.ProjectPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
