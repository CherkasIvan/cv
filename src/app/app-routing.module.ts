import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ERouterPath } from '@utils/enum/router-path.enum';

import { AuthGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: `/${ERouterPath.AUTH}` },
    {
        path: ERouterPath.AUTH,
        loadComponent: () =>
            import('./auth/auth.component').then((component) =>component.AuthComponent)
    },
    {
        path: ERouterPath.LAYOUT,
        canActivate: [AuthGuard],
        loadComponent: () =>
            import('./layout/layout.component').then((component) => component.LayoutComponent)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabledBlocking',
            scrollPositionRestoration: 'enabled',
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
