import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://nodejs-backend-bb71.onrender.com/api';

  constructor(private http: HttpClient) {}

  getCarouselImages(): Observable<{ success: boolean; pictures: {name: string, description: string}[] }> {
    return this.http.get<{ success: boolean; pictures: {name: string, description: string}[] }>(`${this.apiUrl}/carousel`).pipe(
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

  getEventPictures(id : string): Observable<{ success: boolean; pictures: {name: string, description: string}[] }> {
    return this.http.get<{ success: boolean; pictures: {name: string, description: string}[] }>(`${this.apiUrl}/library/${encodeURIComponent(id)}`).pipe(
      shareReplay(1),
      catchError(error => {
        console.error('API Error:', error);
        return throwError(() => new Error('Something went wrong'));
      })
    );
  }

  sendContactForm(formData: any): Observable<any> {
    return this.http.post('http://localhost:5678/webhook/6dedddcd-4a9a-4a62-86cb-3bc690921390', formData).pipe(
      catchError(error => {
        console.error('API Error:', error);
        return throwError(() => new Error('Something went wrong'));
      })
    );
  }
}
