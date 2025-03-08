import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../../interfaces/expense.interface'


@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private baseUrl: string;
  constructor(private http: HttpClient) { 
    this.baseUrl = "http://localhost:3000"
  }

  getAll(): Observable<Expense[]>
  {
    return this.http.get<Expense[]>(`${this.baseUrl}/expense/user/2`)
  }

  getById(id:string)/*: Observable<Expense>*/
  {
    return this.http.get/*<Expense>*/(`${this.baseUrl}/expense/${id}`)

  }

  create(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(`${this.baseUrl}/expense`, expense);
  }

  updateById(id: string, body:any){
    return this.http.put(`${this.baseUrl}/expense/${id}`,body)
  }
}
