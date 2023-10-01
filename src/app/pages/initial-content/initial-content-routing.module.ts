import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialContentComponent } from './initial-content.component';

const routes: Routes = [{ path: '', component: InitialContentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialContentRoutingModule {}
