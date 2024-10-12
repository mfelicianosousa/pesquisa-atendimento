import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PesquisaAtendimentoModel } from './pesquisa-atendimento.model';

@Injectable({
  providedIn: 'root'
})
export class PesquisaAtendimentoService {

  private apiUrl = 'http://pesquisa-api/pesquisa'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  salvarDados(dados: PesquisaAtendimentoModel): Observable<any> {
    return this.http.post<any>(this.apiUrl, dados).pipe(
      catchError(this.handleError)
    );
  }

  atualizarDados(id: number, dados: PesquisaAtendimentoModel): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, dados).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
