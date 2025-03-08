import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { Subscription } from 'rxjs';
import { ExpenseService } from '../services/expense/expense.service';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-expense-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputNumberModule, InputTextModule,FormsModule,DatePickerModule,ButtonModule,RouterModule],
  templateUrl: './expense-add.component.html',
  styleUrl: './expense-add.component.css'
})
export class ExpenseAddComponent {
  myForm:FormGroup;
  constructor(private fb: FormBuilder,private service: ExpenseService){
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      amount: [null, Validators.required],
      description: ['', Validators.required],
      date: [null, Validators.required]
    })
  }
  subscription!: Subscription


  get title(){
    return this.myForm.get('title')
  }
  get description(){
    return this.myForm.get('description')
  }
  get amount(){
    return this.myForm.get('amount')
  }

  get date(){
    return this.myForm.get('date')
  }
  enviar(){
    this.service.create(this.myForm.value).subscribe({
        next: (response) => {
            this.myForm.reset(); 
        },
        error: (err) => console.error(err)
    });
    
  }

}
