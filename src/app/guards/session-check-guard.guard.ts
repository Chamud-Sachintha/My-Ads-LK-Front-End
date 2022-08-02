import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class SessionCheckGuardGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthServiceService) {}

  canActivate(){
    if(!this.authService.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['/app/start-page']);
      return false;
    }
  }
  
}
