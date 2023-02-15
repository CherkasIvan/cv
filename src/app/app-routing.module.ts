import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'main', loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
