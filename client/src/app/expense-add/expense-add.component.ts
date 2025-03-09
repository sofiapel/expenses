import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { Subscription } from 'rxjs';
import { ExpenseService } from '../services/expense/expense.service';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Expense } from '../interfaces/expense.interface';


@Component({
  selector: 'app-expense-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputNumberModule, InputTextModule,FormsModule,DatePickerModule,ButtonModule,RouterModule],
  templateUrl: './expense-add.component.html',
  styleUrl: './expense-add.component.css'
})
export class ExpenseAddComponent implements OnInit, OnDestroy {
  myForm:FormGroup;
  constructor(private fb: FormBuilder,private service: ExpenseService, private route: ActivatedRoute){
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      amount: [null, Validators.required],
      description: ['', Validators.required],
      date: [null, Validators.required]
    })
  }
  isAnUpdate: boolean = false
  expense: Expense | null = null


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
    if (this.isAnUpdate){
      this.service.updateById(this.route.snapshot.paramMap.get('id')!,this.myForm.value).subscribe({
          next: (response) => {
              this.myForm.reset(); 
          },
          error: (err) => console.error(err)
      });
    }else{
      this.service.create(this.myForm.value).subscribe({
        next: (response) => {
            this.myForm.reset(); 
        },
        error: (err) => console.error(err)
    });
    }
    
  }
  ngOnInit(): void {
    this.isAnUpdate = Boolean(this.route.snapshot.paramMap.get('id'))
    console.log(this.isAnUpdate)

    if(this.isAnUpdate){
      this.service.getById(this.route.snapshot.paramMap.get('id')!).subscribe({
        next: (exp: any) => {
        this.expense = exp.data
        this.myForm.patchValue({ title: this.expense?.title, amount: this.expense?.amount, description: this.expense?.description, date: this.expense?.date })



      },
      error: (err) => console.error(err)

      })
    }

    
  }

  ngOnDestroy(): void {
    
  }
}
