import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private baseUrl = 'https://api.coinpaprika.com/v1/coins';
  private marketOverviewUrl = 'https://cryptingup.com/api/markets';

  constructor(private http: HttpClient) { }

  getCoins(): Observable<any> {
    return this.http.get(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  getMarketOverview(): Observable<any> {
    return this.http.get(this.marketOverviewUrl).pipe(
      catchError(this.handleError)
    );
  }

  getLiveStats(symbol: string): Observable<any> {
    const url = `/api/api/v1/market/stats?symbol=${symbol}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error desconocido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
