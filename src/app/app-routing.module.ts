import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticatedGuard } from './routes/authenticated.guard';

import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'signin', pathMatch: 'full'
  },
  {
    path: 'signin', component: IndexComponent, canActivate: [AuthenticatedGuard]
  },
  {
    path: 'signup', component: SignupComponent, canActivate: [AuthenticatedGuard]
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthenticatedGuard], data: { user: JSON.parse(localStorage.getItem('@infospaces/user')), token: JSON.parse(localStorage.getItem('@infospaces/token')) }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

