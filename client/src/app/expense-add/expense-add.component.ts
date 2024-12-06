import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-expense-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputNumberModule],
  templateUrl: './expense-add.component.html',
  styleUrl: './expense-add.component.css'
})
export class ExpenseAddComponent {
  myForm:FormGroup;
  constructor(private fb: FormBuilder){
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      amount: [null, Validators.required],
      description: ['', Validators.required]
    })
  }

  get title(){
    return this.myForm.get('title')
  }
  get description(){
    return this.myForm.get('description')
  }
  get amount(){
    return this.myForm.get('amount')
  }
  enviar(){
    console.log("q pasa aca: ",this.myForm.value)
  }

}
