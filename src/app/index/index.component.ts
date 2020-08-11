import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { IndexService } from './services/api.service';

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

  constructor(
    private router: Router,
    private api: IndexService
  ) {}

  ngOnInit(): void {
  }

  public onSubmit() {
    this.api.signIn(this.signinForm.value).subscribe(res => {
        localStorage.setItem('@infospaces/user', JSON.stringify(res.user));
        localStorage.setItem('@infospaces/token', JSON.stringify(res.token));
      }
    );

    this.router.navigate(['/home']);
  }
}
