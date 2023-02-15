import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [{ path: '', component: MainPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
