import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  baseApiUrl = 'https://file.io';

  constructor(private http: HttpClient) {}

  upload(file: string | Blob): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.baseApiUrl, formData);
  }
}
