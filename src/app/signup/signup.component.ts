import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SignupService } from './services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  emailControl: any;
  passwordControl: any;
  confirmPasswordControl: any;

  signupForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    confirmPassword: new FormControl(''),
  })

  constructor(
    private signupService: SignupService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.emailControl = this.signupForm.controls.email.errors;
    this.passwordControl = this.signupForm.controls.password.errors;
    this.confirmPasswordControl = this.signupForm.controls.confirmPassword.errors;
  }

  onSubmit() {
    this.emailControl = '';
    this.passwordControl = '';
    this.confirmPasswordControl = false;

    if (this.signupForm.controls.email.errors) {
      if (this.signupForm.controls.email.errors.required) this.emailControl = 'required';
      if (this.signupForm.controls.email.errors.email) this.emailControl = 'email';
    }

    if (this.signupForm.controls.password.errors) {
      if (this.signupForm.controls.password.errors.required) this.passwordControl = 'required';
      if (this.signupForm.controls.password.errors.minlength) this.passwordControl = 'minLength';
    }

    if (this.signupForm.value.password !== this.signupForm.value.confirmPassword) return this.confirmPasswordControl = true;

    if (!this.signupForm.valid) return;

    this.signupService.createUser(this.signupForm.value).subscribe(res => {
      this.router.navigate(['/signin']);
    });
  }
}
