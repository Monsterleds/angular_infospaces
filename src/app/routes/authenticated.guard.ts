import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isPrivate = false;
    const user = localStorage.getItem('@infospaces/user');
    const token = localStorage.getItem('@infospaces/token');

    if (next.url[0].path !== 'signin') {
      isPrivate = true;
    }

    if ((!token || !user) && !isPrivate || (token || user) && isPrivate) return true;

    if((!token || !user) && isPrivate) {
      this.router.navigate(['/signin'])
    }

    if((token || user) && !isPrivate) {
      this.router.navigate(['/home'])
    }

    return false;
  }
}
