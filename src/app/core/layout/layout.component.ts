import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';

import { Observable, share, filter } from 'rxjs';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'cv-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public name = 'Get Current Url Route Demo';
  public currentRoute!: string;
  public currentTheme!: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private darkModeService: DarkModeService
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

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('/api/items').pipe(share());
  }
}

interface Item {
  name: string;
  age: number;
  address: string;
}
