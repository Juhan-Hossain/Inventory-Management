import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(protected http: HttpClient) {}
  protected all: any[] = [];
  protected url: string = 'https://localhost:44376/';
  protected endpoint: string = '';

  public getAll(): Observable<any[]> {
    return this.http.get<any>(this.url);
  }

  public add(item: any): Observable<any[]> {
   
    return this.http.post<any>(this.url, item);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id);
  }

  public update(item: any): Observable<any> {
    return this.http.put<any>(this.url, item);
  }
}
