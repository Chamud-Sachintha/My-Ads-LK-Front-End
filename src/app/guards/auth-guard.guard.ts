import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(){
    if(this.authService.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['/auth/sign-in']);
      return false;
    }
  }
  
}
