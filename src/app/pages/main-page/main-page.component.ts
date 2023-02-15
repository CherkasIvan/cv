import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, share } from 'rxjs';

import { GitHubService } from '../../services/git-hub.service';

@Component({
  selector: 'cv-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  items$: Observable<Item[]> = of([
    {name: 'Вася', age: 24, address: 'Москва'},
    {name: 'Петя', age: 23, address: 'Лондон'},
    {name: 'Миша', age: 21, address: 'Париж'},
    {name: 'Вова', age: 23, address: 'Сидней'}
  ]);
basicTable: any;

  constructor(private http: HttpClient, private gitHubService:GitHubService) {
    this.gitHubService.getUserRepos().subscribe(el=>{
      console.log(el)
    })
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
