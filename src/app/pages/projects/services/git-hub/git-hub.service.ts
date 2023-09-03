import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';

import { IGitHub } from '../../models/github.interface';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  constructor(private httpClient: HttpClient) {}

  getUserRepos(): Observable<IGitHub> {
    return this.httpClient
      .get(`https://api.github.com/users/CherkasIvan/repos`)
      .pipe(
        map((item: any) =>
          item.map(
            (p: any) =>
              <IGitHub>{
                name: p.name,
                stars: p.stargazers_count,
                htmlUrl: p.html_url,
                forks: p.forks,
                description: p.description,
              }
          )
        )
      );
  }
}
