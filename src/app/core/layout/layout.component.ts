import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';

import { Observable, of, share, filter } from 'rxjs';

import { GitHubService } from '../../shared/services/git-hub/git-hub.service';

@Component({
  selector: 'cv-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  items$: Observable<Item[]> = of([
    { name: 'Вася', age: 24, address: 'Москва' },
    { name: 'Петя', age: 23, address: 'Лондон' },
    { name: 'Миша', age: 21, address: 'Париж' },
    { name: 'Вова', age: 23, address: 'Сидней' },
  ]);

  name = 'Get Current Url Route Demo';
  currentRoute!: string;

  constructor(private http: HttpClient, private router: Router) {
    router.events
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
