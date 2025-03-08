import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExpenseService } from '../services/expense/expense.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Expense } from '../interfaces/expense.interface';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [RouterModule,TableModule, CommonModule,ButtonModule],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent implements OnInit, OnDestroy {
  expenses: Expense[] = [];
  constructor(private service: ExpenseService){}
  subscription!: Subscription
  ngOnInit(): void {
    this.subscription = this.service.getAll().subscribe({
      next: (exp:any) => { 
        this.expenses = exp.data
      },
      error: (err) => console.error(err)
    })
  }
  ngOnDestroy(): void {
    
  }
}
