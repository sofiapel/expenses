import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../../interfaces/expense.interface'


@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private url: string;
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:3000/expense/user/2"
  }

  getAll(): Observable<Expense[]>
  {
    return this.http.get<Expense[]>(`${this.url}`)
  }

  getById(id:number)//: Observable<Expense>
  {
    //return this.http.get/*<Expense>*/(`${this.url}/${id}`)

  }
}
