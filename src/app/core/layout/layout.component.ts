import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs';

import { DarkModeService } from '../services/dark-mode/dark-mode.service';
import { AuthService } from '../auth/services/auth.service';
import { fadeAnimation } from '../animations/route-animation';

@Component({
	selector: 'cv-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
	animations: [fadeAnimation]
})
export class LayoutComponent {
	public currentRoute!: string;
	public currentTheme!: boolean;
	public isAuth = false;

	constructor(
		private router: Router,
		private darkModeService: DarkModeService,
		public authService: AuthService,
	) {
		this.darkModeService.isDark$.subscribe(
			(theme) => (this.currentTheme = theme)
		);
		this.router.events
			.pipe(filter((event: any) => event instanceof NavigationEnd))
			.subscribe((event: { url: string }) => {
				this.currentRoute = event.url;
			});
	}

	getState(outlet: any) {
		return outlet.activatedRouteData.state;
	}
}
