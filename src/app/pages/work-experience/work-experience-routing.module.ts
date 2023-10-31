import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkExperienceComponent } from './work-experience.component';

const routes: Routes = [{ path: '', component: WorkExperienceComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkExperienceRoutingModule {}
