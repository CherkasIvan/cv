import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoadingInterceptor } from './interceptors/loading.interceptor';

import { AuthModule } from './auth/auth.module';

@NgModule({
	declarations: [],
	exports: [],
	imports: [CommonModule, AuthModule],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoadingInterceptor,
			multi: true
		}
	]
})
export class CoreModule {}
