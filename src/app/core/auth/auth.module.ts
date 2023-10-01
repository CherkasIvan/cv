import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent],
  exports: [AuthComponent],
  imports: [AuthRoutingModule, FormsModule, ReactiveFormsModule, CommonModule]
})
export class AuthModule {}
