import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../@core/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  loginFailed = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.loginFailed = false;

    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;
    const success = this.authService.login(username, password);
    
    if (success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginFailed = true;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.loginFailed = false;
    this.loginForm.reset();
  }
}
