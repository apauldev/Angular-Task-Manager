import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.html',
  styleUrl: './loginscreen.scss',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [FormBuilder]
})
export class Loginscreen {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle login logic here
      console.log(this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
