import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExpenseService } from '../services/expense/expense.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent implements OnInit, OnDestroy {
  //expenses: Expense[];
  constructor(private service: ExpenseService){}
  subscription!: Subscription
  ngOnInit(): void {
    this.subscription = this.service.getAll().subscribe({
      
    })
  }
  ngOnDestroy(): void {
    
  }
}
