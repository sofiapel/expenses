import { Routes } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseAddComponent } from './expense-add/expense-add.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  {
    path: 'expense',
    children: [
      { path: '', component: ExpenseListComponent },
      { path: 'add', component: ExpenseAddComponent },
      { path: ':id', component: ExpenseDetailComponent },
      { path: 'edit/:id', component: ExpenseAddComponent },

    ],
  },
];
