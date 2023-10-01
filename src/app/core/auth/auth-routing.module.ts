import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: '', pathMatch: 'full', redirectTo: '/layout' },
  {
    path: 'layout',
    loadChildren: () =>
      import('../layout/layout.module').then((m) => m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
