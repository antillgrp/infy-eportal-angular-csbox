import { Injectable } from '@angular/core';

import { 
  Router, CanActivate, 
  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree 
} from '@angular/router';

import { Observable, BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  
  constructor(
    private loginService: LoginService, 
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):  Observable<boolean | UrlTree> 
      | Promise<boolean | UrlTree> 
      | boolean 
      | UrlTree {
        
      return  this.loginService
              .loggedUser
              .pipe(
                map(
                  loggedUser => {
                    if(!loggedUser.authenticated){
                      this.router.navigate(['welcome']);
                    }
                    return loggedUser.authenticated;
                  } 
                )
              );
      
      
  }
  
}
