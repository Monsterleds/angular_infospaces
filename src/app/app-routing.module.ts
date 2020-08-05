import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticatedGuard } from './authenticated.guard';

import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'signin', pathMatch: 'full'
  },
  {
    path: 'signin', component: IndexComponent, canActivate: [AuthenticatedGuard]
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

