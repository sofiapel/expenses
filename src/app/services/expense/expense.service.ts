import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private url: string;
  constructor(private http: HttpClient) { 
    //this.url = "http://localhost:8080/expense"
    this.url = 'https://jsonplaceholder.typicode.com/todos'
  }

  getAll(): Observable<Expense>{
    return this.http.get<Expense>(`${this.url}`)
  }

  getById(id:number): Observable<Expense>{
    return this.http.get<Expense>(`${this.url}/${id}`)

  }
}
