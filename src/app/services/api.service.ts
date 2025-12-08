import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getCarouselImages(): Observable<{ success: boolean; files: string[] }> {
    return this.http.get<{ success: boolean; files: string[] }>(`${this.apiUrl}/carousel`).pipe(
      shareReplay(1),
      catchError(error => {
        console.error('API Error:', error);
        return throwError(() => new Error('Something went wrong'));
      })
    );
  }


  getLibrary(): Observable<{ success: boolean; data: Map<string, string> }> {
    return this.http.get<{ success: boolean; data: Map<string, string> }>(`${this.apiUrl}/library`).pipe(
      shareReplay(1),
      catchError(error => {
        console.error('API Error:', error);
        return throwError(() => new Error('Something went wrong'));
      })
    );
  }
}
