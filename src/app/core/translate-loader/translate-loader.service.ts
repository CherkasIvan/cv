import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { TranslateLoader } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root',
})
export class TranslateLoaderService implements TranslateLoader {
    private readonly prefix: string = './assets/i18n/';
    private readonly suffix: string = '.json';

    public constructor(private http: HttpClient) {}

    public getTranslation(lang: string): Observable<any> {
        const url = `${this.prefix}${lang}${this.suffix}`;
        return this.http.get(url);
    }
}

export function createTranslateLoader(
    http: HttpClient,
): TranslateLoaderService {
    return new TranslateLoaderService(http);
}
