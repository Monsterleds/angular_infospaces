import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
  public signinForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    localStorage.setItem('@infospaces/user', JSON.stringify(this.signinForm.value))
    this.router.navigate(['/home']);
  }
}
