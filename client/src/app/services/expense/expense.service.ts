import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../../interfaces/expense.interface';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/expense`;
  }

  getAllByUser(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.baseUrl}/user/${localStorage.getItem('userId')}`);
  }

  getById(id: string /*: Observable<Expense>*/) {
    return this.http.get(/*<Expense>*/ `${this.baseUrl}/${id}`);
  }

  create(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(`${this.baseUrl}/`, expense);
  }

  updateById(id: string, body: any) {
    return this.http.put(`${this.baseUrl}/${id}`, body);
  }
}
