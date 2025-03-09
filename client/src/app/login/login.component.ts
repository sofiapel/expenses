import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, InputTextModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit,OnDestroy {
  myForm:FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private service: AuthService){
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

    })
  }
  get username(){
    return this.myForm.get('username')
  }
  get password(){
    return this.myForm.get('password')
  }
  signIn() {
    this.service.login(this.myForm.value).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (err) => console.error(err)
  });
  }
  
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }
}
