import { Component } from '@angular/core';
import { AuthService } from '@core/auth/services/auth.service';

@Component({
	selector: 'cv-logout',
	templateUrl: './logout.component.html',
	styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
	constructor(private authService: AuthService) {}

	logout() {
		this.authService.signOut()
	}
}
