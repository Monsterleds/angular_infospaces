import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { SignupService } from './services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
  })

  constructor(
    private signupService: SignupService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.signupService.createUser(this.signupForm.value).subscribe(res => {
      this.router.navigate(['/signin']);
    })
  }
}
