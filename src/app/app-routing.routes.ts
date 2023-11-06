import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ERouterPath } from '@utils/enum/router-path.enum';

import { AuthGuard } from './auth/guards/auth.guard';

export const mainRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: `/${ERouterPath.AUTH}` },
    {
        path: ERouterPath.AUTH,
        loadChildren: () =>
            import('./auth/auth.module').then((m) => m.AuthModule)
    },
    {
        path: ERouterPath.LAYOUT,
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('./layout/layout.module').then((m) => m.LayoutModule)
    }
];

// @NgModule({
//     imports: [
//         RouterModule.forRoot(routes, {
//             initialNavigation: 'enabledBlocking',
//             scrollPositionRestoration: 'enabled',
//             preloadingStrategy: PreloadAllModules
//         })
//     ],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {}
