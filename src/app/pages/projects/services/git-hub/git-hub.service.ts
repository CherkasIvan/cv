import { Observable, map } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IGitHubRepo } from '../../models/github-repos.interface';
import { IGitHub } from '../../models/github.interface';

@Injectable({
    providedIn: 'root',
})
export class GitHubService {
    constructor(private httpClient: HttpClient) {}

    public getGithubRepos(): Observable<IGitHub[]> {
        return this.httpClient
            .get<IGitHubRepo[]>(
                'https://api.github.com/users/CherkasIvan/repos',
            )
            .pipe(
                map((repositories: IGitHubRepo[]) =>
                    repositories.map(
                        (repository: IGitHubRepo) =>
                            <IGitHub>{
                                name: repository.name,
                                stars: repository.stargazers_count,
                                htmlUrl: repository.html_url,
                                forks: repository.forks,
                                description: repository.description,
                            },
                    ),
                ),
            );
    }
}
