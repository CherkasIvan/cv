import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ERouterPath } from '@utils/enum/router-path.enum';

import { AuthGuard } from './auth/guards/auth.guard';

export const mainRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: `/${ERouterPath.AUTH}` },
    {
        path: ERouterPath.AUTH,
        loadComponent: () =>
            import('./auth/auth.component').then((c) => c.AuthComponent),
    },
    {
        path: ERouterPath.LAYOUT,
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('./layout/layout.module').then((c) => c.LayoutModule),
    },
];
