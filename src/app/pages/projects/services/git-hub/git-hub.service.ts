import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';

import { IGitHub } from '../../models/github.interface';
import { IGitHubRepo } from '../../models/github-repos.interface';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  constructor(private httpClient: HttpClient) {}

  getUserRepos(): Observable<IGitHub> {
    return this.httpClient
      .get('https://api.github.com/users/CherkasIvan/repos')
      .pipe(
        map((repositories: any) =>
          repositories.map(
            (repository: IGitHubRepo) =>
              <IGitHub>{
                name: repository.name,
                stars: repository.stargazers_count,
                htmlUrl: repository.html_url,
                forks: repository.forks,
                description: repository.description
              }
          )
        )
      );
  }
}
