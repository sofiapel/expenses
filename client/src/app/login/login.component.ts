import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../services/auth/auth.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, InputTextModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit,OnDestroy {
  myForm:FormGroup;
  isRegister: boolean = false;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private service: AuthService,private router: Router){
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

    if(this.isRegister){
      this.service.register(this.myForm.value).subscribe({
        next: (response: any) => {
          this.router.navigate(["login"])        
        },
        error: (err) => {
          alert(err.error.message)
        }
    });


    }else{
      this.service.login(this.myForm.value).subscribe({
        next: (response: any) => {
          this.service.saveLocalStorage('token',response.token)
          this.service.saveLocalStorage('userId',response.userId)
          this.router.navigate(["expense"])        

        },
        error: (err) => {
          alert(err.error.message)
        }
    });

    }
  }
  
  ngOnInit(): void {
    this.isRegister = this.route.snapshot.url[0].path.includes('register')
    
  }
  ngOnDestroy(): void {
    
  }
}
