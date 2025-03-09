import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ExpenseService } from '../services/expense/expense.service';
import { Subscription } from 'rxjs';
import { Expense } from '../interfaces/expense.interface';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmationService, MessageService} from 'primeng/api';



@Component({
  selector: 'app-expense-detail',
  standalone: true,
  imports: [ButtonModule,CardModule, RouterLink, CommonModule, ConfirmPopupModule],
  templateUrl: './expense-detail.component.html',
  styleUrl: './expense-detail.component.css',
  providers: [ConfirmationService, MessageService]
})
export class ExpenseDetailComponent implements OnInit, OnDestroy {
  expense:any/*: Expense*/ = {};

  constructor(private service: ExpenseService,private route: ActivatedRoute,private confirmationService: ConfirmationService,
    private messageService: MessageService, private router: Router){}
  subscription: Subscription = new Subscription() 
  ngOnInit(): void {
    const expenseId = this.route.snapshot.paramMap.get('id');

    if (expenseId){
      this.subscription.add( this.service.getById(expenseId).subscribe({
        next: (exp:any) => { 
          this.expense = exp.data
        },
        error: (err) => console.error(err)
      }))
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  confirm(event:any, id: string) {
    this.confirmationService.close();
    this.confirmationService.confirm({
      target: event.target,
      message: '¿Estás seguro de que quieres eliminar este gasto?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.subscription.add(
          this.service.updateById(id,{ isDeleted: true }).subscribe({
            next: (exp:any) => { 
              this.expense = exp.data
              this.router.navigate(["expense"])        
            },
            error: (err) => console.error(err)
          })
        )
      },
      reject: () => {
      }
    });

}}
